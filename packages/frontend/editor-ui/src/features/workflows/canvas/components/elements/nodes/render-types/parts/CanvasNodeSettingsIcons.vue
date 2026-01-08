<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue';
import { useCanvasNode } from '../../../../../composables/useCanvasNode';
import { useSettingsIconState } from '../../../../../composables/useIconAnimationState';
import { useI18n } from '@n8n/i18n';
import { useWorkflowsStore } from '@/app/stores/workflows.store';

import { N8nIcon, N8nTooltip } from '@n8n/design-system';

const { name } = useCanvasNode();
const i18n = useI18n();
const workflowsStore = useWorkflowsStore();
const $style = useCssModule();

const node = computed(() => workflowsStore.workflowObject.getNode(name.value));
const size = 'medium';

// Hover/focus state tracking for settings icons (Phase 05 - Session 06)
const isHovered = ref(false);
const isFocused = ref(false);

const { glow, glowColor, glowIntensity } = useSettingsIconState({
	isHovered,
	isFocused,
});

function onMouseEnter() {
	isHovered.value = true;
}

function onMouseLeave() {
	isHovered.value = false;
}

function onFocus() {
	isFocused.value = true;
}

function onBlur() {
	isFocused.value = false;
}
</script>

<template>
	<div
		:class="$style.settingsIcons"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
		@focusin="onFocus"
		@focusout="onBlur"
	>
		<N8nTooltip v-if="node?.alwaysOutputData">
			<template #content>
				<div :class="$style.tooltipHeader">
					<N8nIcon icon="always-output-data" :size="size" />
					<strong :class="$style.tooltipTitle">{{
						i18n.baseText('nodeSettings.alwaysOutputData.displayName')
					}}</strong>
				</div>
				<div>
					{{ i18n.baseText('node.settings.alwaysOutputData') }}
				</div>
			</template>
			<div :class="$style.iconWrapper" data-test-id="canvas-node-status-always-output-data">
				<N8nIcon
					icon="always-output-data"
					:size="size"
					:glow="glow"
					:glow-color="glowColor"
					:glow-intensity="glowIntensity"
					stroke-width="normal"
				/>
			</div>
		</N8nTooltip>

		<N8nTooltip v-if="node?.executeOnce">
			<template #content>
				<div :class="$style.tooltipHeader">
					<N8nIcon icon="execute-once" :size="size" />
					<strong :class="$style.tooltipTitle">{{
						i18n.baseText('nodeSettings.executeOnce.displayName')
					}}</strong>
				</div>
				<div>
					{{ i18n.baseText('node.settings.executeOnce') }}
				</div>
			</template>
			<div :class="$style.iconWrapper" data-test-id="canvas-node-status-execute-once">
				<N8nIcon
					icon="execute-once"
					:size="size"
					:glow="glow"
					:glow-color="glowColor"
					:glow-intensity="glowIntensity"
					stroke-width="normal"
				/>
			</div>
		</N8nTooltip>

		<N8nTooltip v-if="node?.retryOnFail">
			<template #content>
				<div :class="$style.tooltipHeader">
					<N8nIcon icon="retry-on-fail" :size="size" />
					<strong :class="$style.tooltipTitle">{{
						i18n.baseText('nodeSettings.retryOnFail.displayName')
					}}</strong>
				</div>
				<div>
					{{ i18n.baseText('node.settings.retriesOnFailure') }}
				</div>
			</template>
			<div :class="$style.iconWrapper" data-test-id="canvas-node-status-retry-on-fail">
				<N8nIcon
					icon="retry-on-fail"
					:size="size"
					:glow="glow"
					:glow-color="glowColor"
					:glow-intensity="glowIntensity"
					stroke-width="normal"
				/>
			</div>
		</N8nTooltip>

		<N8nTooltip
			v-if="node?.onError === 'continueRegularOutput' || node?.onError === 'continueErrorOutput'"
		>
			<template #content>
				<div :class="$style.tooltipHeader">
					<N8nIcon icon="continue-on-error" :size="size" />
					<strong :class="$style.tooltipTitle">{{
						i18n.baseText('node.settings.continuesOnError.title')
					}}</strong>
				</div>
				<div>
					{{ i18n.baseText('node.settings.continuesOnError') }}
				</div>
			</template>
			<div :class="$style.iconWrapper" data-test-id="canvas-node-status-continue-on-error">
				<N8nIcon
					icon="continue-on-error"
					:size="size"
					:glow="glow"
					:glow-color="glowColor"
					:glow-intensity="glowIntensity"
					stroke-width="normal"
				/>
			</div>
		</N8nTooltip>
	</div>
</template>

<style lang="scss" module>
.settingsIcons {
	position: absolute;
	top: var(--canvas-node--status-icons--margin);
	right: var(--canvas-node--status-icons--margin);
	display: flex;
	flex-direction: row;
	gap: var(--spacing--3xs);

	// Obsidian Forge: Subtle icon color
	color: var(--color--foreground--shade-1);

	// Obsidian Forge: Smooth transition for icon visibility
	transition: opacity var(--canvas-node--transition--duration, 150ms)
		var(--easing--ease-out, ease-out);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
}

// Chrome Deco: Icon wrapper for hover/focus interaction (Phase 05 - Session 06)
.iconWrapper {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	// Smooth transition for glow effect
	transition: filter var(--canvas-node--transition--duration, 150ms)
		var(--easing--ease-out, ease-out);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
}

.tooltipHeader {
	display: flex;
	gap: var(--spacing--4xs);
}

.tooltipTitle {
	font-weight: var(--font-weight--semibold);
	font-size: inherit;
	line-height: inherit;
}
</style>
