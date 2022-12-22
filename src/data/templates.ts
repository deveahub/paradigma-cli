const templates = {
	monorepo: {
		default: {
			repository: 'https://github.com/rrios-dev/template-monorepo',
			name: 'default',
		},
	},
	libs: {
		basic: {
			repository: 'https://github.com/rrios-dev/template-basic-package',
			name: 'Basic package',
		},
		react: {
			repository: 'https://github.com/rrios-dev/template-react-package',
			name: 'React package',
		},
		node: {
			repository: 'https://github.com/rrios-dev/template-node-package',
			name: 'Node package',
		},
	},
	apps: {
		nextJS: {
			repository: 'https://github.com/rrios-dev/template-next-app',
			name: 'NextJS',
		},
		storybook: {
			repository: 'https://github.com/rrios-dev/template-storybook-app',
			name: 'Storybook',
		},
	},
	services: {},
} as const;

export type Templates = typeof templates;

export default templates;
