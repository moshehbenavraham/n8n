import type { StoryFn } from '@storybook/vue3-vite';

import N8nIcon from './Icon.vue';

export default {
	title: 'Atoms/Icon',
	component: N8nIcon,
	argTypes: {
		icon: {
			control: 'text',
		},
		size: {
			control: {
				type: 'select',
			},
			options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
		},
		spin: {
			control: {
				type: 'boolean',
			},
		},
		color: {
			control: {
				type: 'select',
			},
			options: [
				'primary',
				'secondary',
				'text-dark',
				'text-base',
				'text-light',
				'text-xlight',
				'danger',
				'success',
				'warning',
				'foreground-dark',
				'foreground-xdark',
			],
		},
		strokeWidth: {
			control: {
				type: 'select',
			},
			options: [1, 1.5, 2, 2.5, 3, 'thin', 'normal', 'standard', 'thick', 'heavy'],
			description: 'Stroke width - numeric (px) or token name',
		},
		// Animation props (Phase 05 - Chrome Deco)
		animation: {
			control: {
				type: 'select',
			},
			options: ['none', 'pulse', 'glow-breathe', 'shimmer', 'brighten'],
			description: 'Animation type to apply to the icon',
		},
		animationState: {
			control: {
				type: 'select',
			},
			options: ['rest', 'hover', 'active', 'focus', 'success', 'error'],
			description: 'Animation state context (for semantic styling)',
		},
		glow: {
			control: {
				type: 'boolean',
			},
			description: 'Enable glow effect on the icon',
		},
		glowColor: {
			control: {
				type: 'select',
			},
			options: ['amber', 'verdigris', 'ember', 'steel'],
			description: 'Glow color variant',
		},
		glowIntensity: {
			control: {
				type: 'select',
			},
			options: ['subtle', 'medium', 'strong'],
			description: 'Glow intensity level',
		},
		// Chromatic props (Phase 05 - Session 04)
		chromatic: {
			control: {
				type: 'boolean',
			},
			description: 'Enable chrome deco effect overlay',
		},
		chromaticState: {
			control: {
				type: 'select',
			},
			options: ['default', 'active', 'success', 'disabled'],
			description: 'Chromatic effect state modifier',
		},
	},
};

const Template: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: '<n8n-icon v-bind="args" />',
});

export const Clock = Template.bind({});
Clock.args = {
	icon: 'clock',
};

export const Plus = Template.bind({});
Plus.args = {
	icon: 'plus',
};

export const Stop = Template.bind({});
Stop.args = {
	icon: 'stop',
};

export const WithColor = Template.bind({});
WithColor.args = {
	icon: 'check',
	color: 'success',
};

export const WithDangerColor = Template.bind({});
WithDangerColor.args = {
	icon: 'times',
	color: 'danger',
};

export const WithSize = Template.bind({});
WithSize.args = {
	icon: 'info',
	size: 'xlarge',
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
	icon: 'info',
	size: 32,
};

export const WithSpin = Template.bind({});
WithSpin.args = {
	icon: 'spinner',
	spin: true,
};

export const WithStrokeWidth = Template.bind({});
WithStrokeWidth.args = {
	icon: 'circle',
	strokeWidth: 3,
};

export const AllSizes: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 16px;">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info" size="xsmall" />
				<span style="font-size: 12px;">xsmall</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info" size="small" />
				<span style="font-size: 12px;">small</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info" size="medium" />
				<span style="font-size: 12px;">medium</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info" size="large" />
				<span style="font-size: 12px;">large</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info" size="xlarge" />
				<span style="font-size: 12px;">xlarge</span>
			</div>
		</div>
	`,
});

export const AllColors: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="primary" size="large" />
				<span style="font-size: 12px;">primary</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="secondary" size="large" />
				<span style="font-size: 12px;">secondary</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="text-dark" size="large" />
				<span style="font-size: 12px;">text-dark</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="text-base" size="large" />
				<span style="font-size: 12px;">text-base</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="text-light" size="large" />
				<span style="font-size: 12px;">text-light</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="text-xlight" size="large" />
				<span style="font-size: 12px;">text-xlight</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="danger" size="large" />
				<span style="font-size: 12px;">danger</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="success" size="large" />
				<span style="font-size: 12px;">success</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="warning" size="large" />
				<span style="font-size: 12px;">warning</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="foreground-dark" size="large" />
				<span style="font-size: 12px;">foreground-dark</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<n8n-icon icon="circle" color="foreground-xdark" size="large" />
				<span style="font-size: 12px;">foreground-xdark</span>
			</div>
		</div>
	`,
});

export const CommonIcons: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px;">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="check" size="large" />
				<span style="font-size: 12px;">check</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="times" size="large" />
				<span style="font-size: 12px;">times</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="plus" size="large" />
				<span style="font-size: 12px;">plus</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="minus" size="large" />
				<span style="font-size: 12px;">minus</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="search" size="large" />
				<span style="font-size: 12px;">search</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="trash" size="large" />
				<span style="font-size: 12px;">trash</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="edit" size="large" />
				<span style="font-size: 12px;">edit</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="cog" size="large" />
				<span style="font-size: 12px;">cog</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="chevron-down" size="large" />
				<span style="font-size: 12px;">chevron-down</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="chevron-up" size="large" />
				<span style="font-size: 12px;">chevron-up</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="info-circle" size="large" />
				<span style="font-size: 12px;">info-circle</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
				<n8n-icon icon="exclamation-triangle" size="large" />
				<span style="font-size: 12px;">exclamation-triangle</span>
			</div>
		</div>
	`,
});

// Animation Stories (Phase 05 - Chrome Deco)
export const AnimationPulse = Template.bind({});
AnimationPulse.args = {
	icon: 'spinner',
	size: 'xlarge',
	animation: 'pulse',
};
AnimationPulse.parameters = {
	docs: {
		description: {
			story: 'Pulse animation - scale and opacity oscillation for loading/processing states.',
		},
	},
};

export const AnimationGlowBreathe = Template.bind({});
AnimationGlowBreathe.args = {
	icon: 'circle',
	size: 'xlarge',
	animation: 'glow-breathe',
	glow: true,
	glowColor: 'amber',
	glowIntensity: 'medium',
};
AnimationGlowBreathe.parameters = {
	docs: {
		description: {
			story: 'Glow breathe animation - ambient drop-shadow cycling for active indicators.',
		},
	},
};

export const AnimationShimmer = Template.bind({});
AnimationShimmer.args = {
	icon: 'star',
	size: 'xlarge',
	animation: 'shimmer',
	color: 'primary',
};
AnimationShimmer.parameters = {
	docs: {
		description: {
			story: 'Shimmer animation - chrome highlight sweep effect for premium appearance.',
		},
	},
};

export const AnimationBrighten = Template.bind({});
AnimationBrighten.args = {
	icon: 'check',
	size: 'xlarge',
	animation: 'brighten',
	color: 'success',
};
AnimationBrighten.parameters = {
	docs: {
		description: {
			story: 'Brighten animation - quick brightness flash for user feedback.',
		},
	},
};

export const AllAnimations: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="spinner" size="xlarge" animation="pulse" />
				<span style="font-size: 12px; color: var(--color--text);">pulse</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" animation="glow-breathe" :glow="true" glow-color="amber" glow-intensity="medium" />
				<span style="font-size: 12px; color: var(--color--text);">glow-breathe</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="star" size="xlarge" animation="shimmer" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">shimmer</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="check" size="xlarge" animation="brighten" color="success" />
				<span style="font-size: 12px; color: var(--color--text);">brighten</span>
			</div>
		</div>
	`,
});
AllAnimations.parameters = {
	docs: {
		description: {
			story: 'All four animation types side by side.',
		},
	},
};

// Glow Color Stories
export const GlowAmber = Template.bind({});
GlowAmber.args = {
	icon: 'bolt',
	size: 'xlarge',
	glow: true,
	glowColor: 'amber',
	glowIntensity: 'strong',
	color: 'primary',
};
GlowAmber.parameters = {
	docs: {
		description: {
			story: 'Amber glow - primary brand color, forge fire theme.',
		},
	},
};

export const GlowVerdigris = Template.bind({});
GlowVerdigris.args = {
	icon: 'check-circle',
	size: 'xlarge',
	glow: true,
	glowColor: 'verdigris',
	glowIntensity: 'strong',
	color: 'success',
};
GlowVerdigris.parameters = {
	docs: {
		description: {
			story: 'Verdigris glow - success/positive state, oxidized copper theme.',
		},
	},
};

export const GlowEmber = Template.bind({});
GlowEmber.args = {
	icon: 'exclamation-circle',
	size: 'xlarge',
	glow: true,
	glowColor: 'ember',
	glowIntensity: 'strong',
	color: 'danger',
};
GlowEmber.parameters = {
	docs: {
		description: {
			story: 'Ember glow - danger/error state, forge coals theme.',
		},
	},
};

export const GlowSteel = Template.bind({});
GlowSteel.args = {
	icon: 'cog',
	size: 'xlarge',
	glow: true,
	glowColor: 'steel',
	glowIntensity: 'strong',
	color: 'secondary',
};
GlowSteel.parameters = {
	docs: {
		description: {
			story: 'Steel glow - neutral/secondary state, cool metal theme.',
		},
	},
};

export const AllGlowColors: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :glow="true" glow-color="amber" glow-intensity="strong" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">amber</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="check-circle" size="xlarge" :glow="true" glow-color="verdigris" glow-intensity="strong" color="success" />
				<span style="font-size: 12px; color: var(--color--text);">verdigris</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="exclamation-circle" size="xlarge" :glow="true" glow-color="ember" glow-intensity="strong" color="danger" />
				<span style="font-size: 12px; color: var(--color--text);">ember</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="cog" size="xlarge" :glow="true" glow-color="steel" glow-intensity="strong" color="secondary" />
				<span style="font-size: 12px; color: var(--color--text);">steel</span>
			</div>
		</div>
	`,
});
AllGlowColors.parameters = {
	docs: {
		description: {
			story: 'All four glow color variants with strong intensity.',
		},
	},
};

export const GlowIntensityLevels: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; align-items: center; gap: 32px;">
				<span style="font-size: 12px; color: var(--color--text); width: 60px;">amber</span>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="amber" glow-intensity="subtle" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">subtle</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="amber" glow-intensity="medium" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">medium</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="amber" glow-intensity="strong" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">strong</span>
				</div>
			</div>
			<div style="display: flex; align-items: center; gap: 32px;">
				<span style="font-size: 12px; color: var(--color--text); width: 60px;">verdigris</span>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="verdigris" glow-intensity="subtle" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">subtle</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="verdigris" glow-intensity="medium" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">medium</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="verdigris" glow-intensity="strong" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">strong</span>
				</div>
			</div>
			<div style="display: flex; align-items: center; gap: 32px;">
				<span style="font-size: 12px; color: var(--color--text); width: 60px;">ember</span>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="ember" glow-intensity="subtle" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">subtle</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="ember" glow-intensity="medium" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">medium</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="ember" glow-intensity="strong" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">strong</span>
				</div>
			</div>
			<div style="display: flex; align-items: center; gap: 32px;">
				<span style="font-size: 12px; color: var(--color--text); width: 60px;">steel</span>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="steel" glow-intensity="subtle" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">subtle</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="steel" glow-intensity="medium" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">medium</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
					<n8n-icon icon="circle" size="xlarge" :glow="true" glow-color="steel" glow-intensity="strong" />
					<span style="font-size: 10px; color: var(--color--text--tint-1);">strong</span>
				</div>
			</div>
		</div>
	`,
});
GlowIntensityLevels.parameters = {
	docs: {
		description: {
			story: 'Matrix showing all glow colors at all intensity levels.',
		},
	},
};

// Combined animation and glow
export const AnimatedGlow = Template.bind({});
AnimatedGlow.args = {
	icon: 'bolt',
	size: 'xlarge',
	animation: 'glow-breathe',
	glow: true,
	glowColor: 'amber',
	glowIntensity: 'strong',
	color: 'primary',
};
AnimatedGlow.parameters = {
	docs: {
		description: {
			story: 'Combined glow-breathe animation with amber glow - for active/running states.',
		},
	},
};

// Stroke Weight Token Stories (Phase 05 - Chrome Deco)
export const StrokeWeightThin = Template.bind({});
StrokeWeightThin.args = {
	icon: 'circle',
	size: 'xlarge',
	strokeWidth: 'thin',
};
StrokeWeightThin.parameters = {
	docs: {
		description: {
			story: 'Thin stroke weight (1px) - subtle decorative strokes.',
		},
	},
};

export const StrokeWeightNormal = Template.bind({});
StrokeWeightNormal.args = {
	icon: 'circle',
	size: 'xlarge',
	strokeWidth: 'normal',
};
StrokeWeightNormal.parameters = {
	docs: {
		description: {
			story: 'Normal stroke weight (1.5px) - default rest state.',
		},
	},
};

export const StrokeWeightStandard = Template.bind({});
StrokeWeightStandard.args = {
	icon: 'circle',
	size: 'xlarge',
	strokeWidth: 'standard',
};
StrokeWeightStandard.parameters = {
	docs: {
		description: {
			story: 'Standard stroke weight (2px) - hover state.',
		},
	},
};

export const StrokeWeightThick = Template.bind({});
StrokeWeightThick.args = {
	icon: 'circle',
	size: 'xlarge',
	strokeWidth: 'thick',
};
StrokeWeightThick.parameters = {
	docs: {
		description: {
			story: 'Thick stroke weight (2.5px) - active/pressed state.',
		},
	},
};

export const StrokeWeightHeavy = Template.bind({});
StrokeWeightHeavy.args = {
	icon: 'circle',
	size: 'xlarge',
	strokeWidth: 'heavy',
};
StrokeWeightHeavy.parameters = {
	docs: {
		description: {
			story: 'Heavy stroke weight (3px) - emphasis, focus states.',
		},
	},
};

export const AllStrokeWeights: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" stroke-width="thin" />
				<span style="font-size: 12px; color: var(--color--text);">thin (1px)</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" stroke-width="normal" />
				<span style="font-size: 12px; color: var(--color--text);">normal (1.5px)</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" stroke-width="standard" />
				<span style="font-size: 12px; color: var(--color--text);">standard (2px)</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" stroke-width="thick" />
				<span style="font-size: 12px; color: var(--color--text);">thick (2.5px)</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" stroke-width="heavy" />
				<span style="font-size: 12px; color: var(--color--text);">heavy (3px)</span>
			</div>
		</div>
	`,
});
AllStrokeWeights.parameters = {
	docs: {
		description: {
			story: 'All five stroke weight tokens side by side - thin through heavy.',
		},
	},
};

export const StrokeWeightNumeric: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" :stroke-width="1" />
				<span style="font-size: 12px; color: var(--color--text);">1px</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" :stroke-width="2" />
				<span style="font-size: 12px; color: var(--color--text);">2px</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" :stroke-width="3" />
				<span style="font-size: 12px; color: var(--color--text);">3px</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" :stroke-width="4" />
				<span style="font-size: 12px; color: var(--color--text);">4px</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="circle" size="xlarge" :stroke-width="5" />
				<span style="font-size: 12px; color: var(--color--text);">5px</span>
			</div>
		</div>
	`,
});
StrokeWeightNumeric.parameters = {
	docs: {
		description: {
			story: 'Numeric stroke width values (backwards compatible) - custom pixel values.',
		},
	},
};

export const StrokeWeightComparison: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: var(--color--background);">
			<h3 style="margin: 0; font-size: 14px; color: var(--color--text);">Tokens vs Numeric Values</h3>
			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;">
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="check" size="xlarge" stroke-width="thin" color="success" />
					<span style="font-size: 10px; color: var(--color--text);">thin token</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="check" size="xlarge" stroke-width="normal" color="success" />
					<span style="font-size: 10px; color: var(--color--text);">normal token</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="check" size="xlarge" stroke-width="standard" color="success" />
					<span style="font-size: 10px; color: var(--color--text);">standard token</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="check" size="xlarge" stroke-width="thick" color="success" />
					<span style="font-size: 10px; color: var(--color--text);">thick token</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="check" size="xlarge" stroke-width="heavy" color="success" />
					<span style="font-size: 10px; color: var(--color--text);">heavy token</span>
				</div>
			</div>
			<p style="margin: 0; font-size: 12px; color: var(--color--text--tint-1);">
				Token values: thin=1px, normal=1.5px, standard=2px, thick=2.5px, heavy=3px
			</p>
		</div>
	`,
});
StrokeWeightComparison.parameters = {
	docs: {
		description: {
			story:
				'Visual comparison of stroke weight tokens for Chrome Deco retro-futuristic aesthetic.',
		},
	},
};

// Chromatic Effect Stories (Phase 05 - Session 04)
export const ChromaticDefault = Template.bind({});
ChromaticDefault.args = {
	icon: 'bolt',
	size: 'xlarge',
	chromatic: true,
	chromaticState: 'default',
	color: 'primary',
};
ChromaticDefault.parameters = {
	docs: {
		description: {
			story:
				'Chrome Deco effect - metallic gradient overlay with beveled edges. Hover to see shimmer animation.',
		},
	},
};

export const ChromaticActive = Template.bind({});
ChromaticActive.args = {
	icon: 'bolt',
	size: 'xlarge',
	chromatic: true,
	chromaticState: 'active',
	color: 'primary',
};
ChromaticActive.parameters = {
	docs: {
		description: {
			story: 'Chrome Deco effect in active state - enhanced opacity for emphasis.',
		},
	},
};

export const ChromaticSuccess = Template.bind({});
ChromaticSuccess.args = {
	icon: 'check',
	size: 'xlarge',
	chromatic: true,
	chromaticState: 'success',
	color: 'success',
};
ChromaticSuccess.parameters = {
	docs: {
		description: {
			story: 'Chrome Deco effect with success state - triggers sunburst glow animation.',
		},
	},
};

export const ChromaticDisabled = Template.bind({});
ChromaticDisabled.args = {
	icon: 'bolt',
	size: 'xlarge',
	chromatic: true,
	chromaticState: 'disabled',
	color: 'text-xlight',
};
ChromaticDisabled.parameters = {
	docs: {
		description: {
			story: 'Chrome Deco effect in disabled state - reduced opacity, no bevel filter.',
		},
	},
};

export const AllChromaticStates: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :chromatic="true" chromatic-state="default" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">default</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :chromatic="true" chromatic-state="active" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">active</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="check" size="xlarge" :chromatic="true" chromatic-state="success" color="success" />
				<span style="font-size: 12px; color: var(--color--text);">success</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :chromatic="true" chromatic-state="disabled" color="text-xlight" />
				<span style="font-size: 12px; color: var(--color--text);">disabled</span>
			</div>
		</div>
	`,
});
AllChromaticStates.parameters = {
	docs: {
		description: {
			story: 'All chromatic state variants - default, active, success, and disabled.',
		},
	},
};

export const ChromaticSizeVariations: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xsmall" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">xsmall</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="small" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">small</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="medium" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">medium</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="large" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">large</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">xlarge</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xxlarge" :chromatic="true" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">xxlarge</span>
			</div>
		</div>
	`,
});
ChromaticSizeVariations.parameters = {
	docs: {
		description: {
			story: 'Chrome Deco effect at all icon sizes - gradient scales proportionally.',
		},
	},
};

export const ChromaticWithGlow: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; align-items: center; gap: 32px; padding: 32px; background: var(--color--background);">
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="bolt" size="xlarge" :chromatic="true" :glow="true" glow-color="amber" glow-intensity="strong" color="primary" />
				<span style="font-size: 12px; color: var(--color--text);">chrome + amber glow</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="check" size="xlarge" :chromatic="true" :glow="true" glow-color="verdigris" glow-intensity="strong" color="success" />
				<span style="font-size: 12px; color: var(--color--text);">chrome + verdigris glow</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="x" size="xlarge" :chromatic="true" :glow="true" glow-color="ember" glow-intensity="strong" color="danger" />
				<span style="font-size: 12px; color: var(--color--text);">chrome + ember glow</span>
			</div>
			<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
				<n8n-icon icon="cog" size="xlarge" :chromatic="true" :glow="true" glow-color="steel" glow-intensity="strong" color="secondary" />
				<span style="font-size: 12px; color: var(--color--text);">chrome + steel glow</span>
			</div>
		</div>
	`,
});
ChromaticWithGlow.parameters = {
	docs: {
		description: {
			story: 'Chrome Deco effect combined with glow - maximum retro-futuristic impact.',
		},
	},
};

export const ChromaticInteractive: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: var(--color--background);">
			<p style="margin: 0; font-size: 14px; color: var(--color--text);">
				<strong>Hover over the icons</strong> to see the shimmer animation effect.
			</p>
			<div style="display: flex; align-items: center; gap: 32px;">
				<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 16px; border-radius: 8px; cursor: pointer;">
					<n8n-icon icon="play" size="xlarge" :chromatic="true" color="success" />
					<span style="font-size: 12px; color: var(--color--text);">play</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 16px; border-radius: 8px; cursor: pointer;">
					<n8n-icon icon="pause" size="xlarge" :chromatic="true" color="warning" />
					<span style="font-size: 12px; color: var(--color--text);">pause</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 16px; border-radius: 8px; cursor: pointer;">
					<n8n-icon icon="stop" size="xlarge" :chromatic="true" color="danger" />
					<span style="font-size: 12px; color: var(--color--text);">stop</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 16px; border-radius: 8px; cursor: pointer;">
					<n8n-icon icon="cog" size="xlarge" :chromatic="true" color="secondary" />
					<span style="font-size: 12px; color: var(--color--text);">settings</span>
				</div>
			</div>
		</div>
	`,
});
ChromaticInteractive.parameters = {
	docs: {
		description: {
			story:
				'Interactive demo - hover over icons to trigger shimmer animation. Focus states also work.',
		},
	},
};

// =============================================================================
// Canvas Node State Mapping Stories (Phase 05 - Session 06)
// =============================================================================
// These stories demonstrate the icon animation mappings used in canvas node
// status icons during workflow execution.

export const NodeStateIdle: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="node-success" size="xlarge" animation="none" :glow="false" stroke-width="normal" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Idle State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">No animation, normal stroke weight</span>
		</div>
	`,
});
NodeStateIdle.parameters = {
	docs: {
		description: {
			story:
				'Idle state - default appearance when node has not executed. No animation, no glow, normal stroke weight.',
		},
	},
};

export const NodeStateSelected: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="node-success" size="xlarge" animation="glow-breathe" :glow="true" glow-color="amber" glow-intensity="medium" stroke-width="standard" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Selected State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">Glow-breathe animation with amber glow</span>
		</div>
	`,
});
NodeStateSelected.parameters = {
	docs: {
		description: {
			story:
				'Selected state - node is selected on the canvas. Glow-breathe animation with amber glow, standard stroke weight.',
		},
	},
};

export const NodeStateRunning: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="spinner" size="xlarge" animation="pulse" :glow="true" glow-color="amber" glow-intensity="strong" stroke-width="thick" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Running State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">Pulse animation with strong amber glow</span>
		</div>
	`,
});
NodeStateRunning.parameters = {
	docs: {
		description: {
			story:
				'Running state - node is currently executing. Pulse animation with strong amber glow, thick stroke weight.',
		},
	},
};

export const NodeStateSuccess: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="node-success" size="xlarge" animation="brighten" :glow="true" glow-color="verdigris" glow-intensity="medium" stroke-width="standard" color="success" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Success State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">Brighten animation with verdigris glow</span>
		</div>
	`,
});
NodeStateSuccess.parameters = {
	docs: {
		description: {
			story:
				'Success state - node executed successfully. Brief brighten animation with verdigris (oxidized copper) glow.',
		},
	},
};

export const NodeStateError: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="node-execution-error" size="xlarge" animation="pulse" :glow="true" glow-color="ember" glow-intensity="strong" stroke-width="standard" color="danger" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Error State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">Pulse animation with ember glow</span>
		</div>
	`,
});
NodeStateError.parameters = {
	docs: {
		description: {
			story:
				'Error state - node encountered an error. Pulse animation with ember glow to draw attention.',
		},
	},
};

export const NodeStateDisabled: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px; background: var(--color--background);">
			<n8n-icon icon="power" size="xlarge" animation="none" :glow="false" stroke-width="thin" color="text-xlight" />
			<span style="font-size: 14px; color: var(--color--text); font-weight: 600;">Disabled State</span>
			<span style="font-size: 12px; color: var(--color--text--tint-1);">No animation, thin stroke weight</span>
		</div>
	`,
});
NodeStateDisabled.parameters = {
	docs: {
		description: {
			story:
				'Disabled state - node is deactivated. No animation, no glow, thin stroke weight for reduced visual emphasis.',
		},
	},
};

export const AllNodeStates: StoryFn = (args, { argTypes }) => ({
	setup: () => ({ args }),
	props: Object.keys(argTypes),
	components: {
		N8nIcon,
	},
	template: `
		<div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: var(--color--background);">
			<h3 style="margin: 0; font-size: 16px; color: var(--color--text);">Canvas Node State Animation Mapping</h3>
			<p style="margin: 0; font-size: 12px; color: var(--color--text--tint-1);">
				These icons demonstrate how N8nIcon props are mapped to canvas node execution states.
			</p>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="node-success" size="xlarge" animation="none" :glow="false" stroke-width="normal" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Idle</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">none / normal</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="node-success" size="xlarge" animation="glow-breathe" :glow="true" glow-color="amber" glow-intensity="medium" stroke-width="standard" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Selected</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">glow-breathe / amber</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="spinner" size="xlarge" animation="pulse" :glow="true" glow-color="amber" glow-intensity="strong" stroke-width="thick" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Running</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">pulse / amber</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="node-success" size="xlarge" animation="brighten" :glow="true" glow-color="verdigris" glow-intensity="medium" stroke-width="standard" color="success" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Success</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">brighten / verdigris</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="node-execution-error" size="xlarge" animation="pulse" :glow="true" glow-color="ember" glow-intensity="strong" stroke-width="standard" color="danger" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Error</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">pulse / ember</span>
				</div>
				<div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--color--background--light-3); border-radius: 8px;">
					<n8n-icon icon="power" size="xlarge" animation="none" :glow="false" stroke-width="thin" color="text-xlight" />
					<span style="font-size: 12px; color: var(--color--text); font-weight: 600;">Disabled</span>
					<span style="font-size: 10px; color: var(--color--text--tint-1);">none / thin</span>
				</div>
			</div>
		</div>
	`,
});
AllNodeStates.parameters = {
	docs: {
		description: {
			story:
				'Complete overview of all canvas node state animations. Each state has specific animation, glow color, and stroke weight mappings.',
		},
	},
};
