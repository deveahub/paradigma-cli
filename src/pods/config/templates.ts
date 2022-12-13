const templates = {
	monorepo: {
		default: {
			repository: 'https://github.com/rrios-dev/template-monorepo',
			name: 'default',
		},
	},
	packages: {
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
	},
} as const;

export default templates;
