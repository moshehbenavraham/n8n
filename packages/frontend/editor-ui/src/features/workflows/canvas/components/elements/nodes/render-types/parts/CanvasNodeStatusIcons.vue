<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import TitledList from '@/app/components/TitledList.vue';
import { useNodeHelpers } from '@/app/composables/useNodeHelpers';
import { useCanvasNode } from '../../../../../composables/useCanvasNode';
import { useIconAnimationState } from '../../../../../composables/useIconAnimationState';
import { useI18n } from '@n8n/i18n';
import { CanvasNodeDirtiness, CanvasNodeRenderType } from '../../../../../canvas.types';
import { useRoute } from 'vue-router';
import { VIEWS } from '@/app/constants';

import { N8nIcon, N8nTooltip } from '@n8n/design-system';
const {
	size = 'large',
	spinnerScrim = false,
	spinnerLayout = 'absolute',
} = defineProps<{
	size?: 'small' | 'medium' | 'large';
	spinnerScrim?: boolean;
	spinnerLayout?: 'absolute' | 'static';
}>();

const nodeHelpers = useNodeHelpers();
const i18n = useI18n();
const $style = useCssModule();

const {
	hasPinnedData,
	executionErrors,
	validationErrors,
	hasExecutionErrors,
	hasValidationErrors,
	executionStatus,
	executionRunning,
	hasRunData,
	runDataIterations,
	isDisabled,
	isSelected,
	render,
	isNotInstalledCommunityNode,
} = useCanvasNode();
const route = useRoute();

// Chrome Deco icon animation state (Phase 05 - Session 06)
const {
	animation: statusAnimation,
	glow: statusGlow,
	glowColor: statusGlowColor,
	glowIntensity: statusGlowIntensity,
	strokeWeight: statusStrokeWeight,
} = useIconAnimationState({
	executionStatus,
	executionRunning,
	isDisabled,
	isSelected,
	hasExecutionErrors,
});

const hideNodeIssues = computed(() => false); // @TODO Implement this
const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
const dirtiness = computed(() =>
	render.value.type === CanvasNodeRenderType.Default ? render.value.options.dirtiness : undefined,
);

const commonClasses = computed(() => [
	$style.status,
	spinnerScrim ? $style.spinnerScrim : '',
	spinnerLayout === 'absolute' ? $style.absoluteSpinner : '',
]);

const groupedExecutionErrors = computed(() => {
	const errorCounts = executionErrors.value.reduce(
		(acc, error) => {
			acc[error] = (acc[error] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	return Object.entries(errorCounts).map(([error, count]) =>
		count > 1 ? `${error} (x${count})` : error,
	);
});
</script>

<template>
	<!-- Running state - show pulse animation with amber glow (Phase 05) -->
	<div
		v-if="executionRunning"
		data-test-id="canvas-node-status-running"
		:class="[...commonClasses, $style.running]"
	>
		<N8nIcon
			icon="spinner"
			:size="size"
			:animation="statusAnimation"
			:glow="statusGlow"
			:glow-color="statusGlowColor"
			:glow-intensity="statusGlowIntensity"
			:stroke-width="statusStrokeWeight"
		/>
	</div>
	<div
		v-else-if="isNotInstalledCommunityNode && !isDemoRoute"
		:class="[...commonClasses, $style.issues]"
		data-test-id="node-not-installed"
	>
		<N8nTooltip :show-after="500" placement="bottom">
			<template #content> {{ i18n.baseText('node.install-to-use') }} </template>
			<N8nIcon icon="hard-drive-download" :size="size" :stroke-width="statusStrokeWeight" />
		</N8nTooltip>
	</div>
	<div v-else-if="isDisabled" :class="[...commonClasses, $style.disabled]">
		<N8nIcon icon="power" :size="size" :stroke-width="statusStrokeWeight" />
	</div>
	<div
		v-else-if="hasExecutionErrors && !hideNodeIssues"
		:class="[...commonClasses, $style.issues]"
		data-test-id="node-issues"
	>
		<N8nTooltip :show-after="500" placement="bottom">
			<template #content>
				<TitledList :title="`${i18n.baseText('node.issues')}:`" :items="groupedExecutionErrors" />
			</template>
			<N8nIcon
				icon="node-execution-error"
				:size="size"
				:animation="statusAnimation"
				:glow="statusGlow"
				:glow-color="statusGlowColor"
				:glow-intensity="statusGlowIntensity"
				:stroke-width="statusStrokeWeight"
			/>
		</N8nTooltip>
	</div>
	<div
		v-else-if="hasValidationErrors && !hideNodeIssues"
		:class="[...commonClasses, $style.issues]"
		data-test-id="node-issues"
	>
		<N8nTooltip :show-after="500" placement="bottom">
			<template #content>
				<TitledList :title="`${i18n.baseText('node.issues')}:`" :items="validationErrors" />
			</template>
			<N8nIcon
				icon="node-validation-error"
				:size="size"
				:glow="statusGlow"
				:glow-color="statusGlowColor"
				:glow-intensity="statusGlowIntensity"
				:stroke-width="statusStrokeWeight"
			/>
		</N8nTooltip>
	</div>
	<div v-else-if="executionStatus === 'unknown'">
		<!-- Do nothing, unknown means the node never executed -->
	</div>
	<div
		v-else-if="hasPinnedData && !nodeHelpers.isProductionExecutionPreview.value"
		data-test-id="canvas-node-status-pinned"
		:class="[...commonClasses, $style.pinnedData]"
	>
		<N8nIcon
			icon="node-pin"
			:size="size"
			:glow="isSelected"
			glow-color="amber"
			glow-intensity="subtle"
			:stroke-width="statusStrokeWeight"
		/>
	</div>
	<div v-else-if="dirtiness !== undefined">
		<N8nTooltip :show-after="500" placement="bottom">
			<template #content>
				{{
					i18n.baseText(
						dirtiness === CanvasNodeDirtiness.PARAMETERS_UPDATED
							? 'node.dirty'
							: 'node.subjectToChange',
					)
				}}
			</template>
			<div data-test-id="canvas-node-status-warning" :class="[...commonClasses, $style.warning]">
				<N8nIcon
					icon="node-dirty"
					:size="size"
					:glow="isSelected"
					glow-color="amber"
					glow-intensity="subtle"
					:stroke-width="statusStrokeWeight"
				/>
				<span v-if="runDataIterations > 1" :class="$style.count"> {{ runDataIterations }}</span>
			</div>
		</N8nTooltip>
	</div>
	<div
		v-else-if="hasRunData && executionStatus === 'success'"
		data-test-id="canvas-node-status-success"
		:class="[...commonClasses, $style.runData]"
	>
		<N8nIcon
			icon="node-success"
			:size="size"
			:animation="statusAnimation"
			:glow="statusGlow"
			:glow-color="statusGlowColor"
			:glow-intensity="statusGlowIntensity"
			:stroke-width="statusStrokeWeight"
		/>
		<span v-if="runDataIterations > 1" :class="$style.count"> {{ runDataIterations }}</span>
	</div>
</template>

<style lang="scss" module>
.status {
	display: flex;
	align-items: center;
	gap: var(--spacing--5xs);
	font-weight: var(--font-weight--bold);

	// Obsidian Forge: Smooth transition for status icon changes
	transition: color var(--canvas-node--transition--duration, 150ms)
		var(--easing--ease-out, ease-out);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
}

.runData {
	color: var(--color--success);
}

.waiting {
	color: var(--color--secondary);
}

.pinnedData {
	color: var(--color--secondary);
}

.running {
	color: hsl(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l));

	&.absoluteSpinner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3.75em;
		color: hsla(var(--color--primary--h), var(--color--primary--s), var(--color--primary--l), 0.7);
		position: absolute;
		left: 0;
		top: 0;
		padding: var(--canvas-node--status-icons--margin);
	}

	&.spinnerScrim {
		z-index: 10;
		// Obsidian Forge: Tokenized background for spinner scrim
		background-color: light-dark(
			oklch(from var(--color--neutral-white) l c h / 0.82),
			oklch(from var(--color--obsidian-900) l c h / 0.82)
		);
		border-radius: var(--radius--lg);
	}
}

.issues {
	color: var(--color--danger);
	cursor: default;
}

.count {
	font-size: var(--font-size--sm);
}

.warning {
	color: var(--color--warning);
}

.disabled {
	color: var(--color--foreground--shade-2);
}
</style>
