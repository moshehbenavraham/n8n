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
				type: 'number',
			},
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
