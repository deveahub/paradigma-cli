import { Sources } from './types';

const sources: Sources = {
	apps: [
		{
			repository: 'https://github.com/rriosper/devaway-racing-services-demo',
			name: 'NextJS',
		},
	],
	components: [],
	utils: [],
	services: [],
	theme: [],
	devtools: [
		{
			repository: 'https://github.com/rrios-dev/jest-config-node',
			name: 'Jest config node',
		},
		{
			repository: 'https://github.com/rrios-dev/jest-config-react',
			name: 'Jest config react',
		},
		{
			repository: 'https://github.com/rrios-dev/eslint-config-node',
			name: 'ESLint config node',
		},
		{
			repository: 'https://github.com/rrios-dev/eslint-config-react',
			name: 'ESLint config react',
		},
		{
			repository: 'https://github.com/rrios-dev/eslint-config-base',
			name: 'ESLint config base',
		},
	],
	core: [
		{
			repository: 'https://github.com/rrios-dev/tsconfig',
			name: 'TS Config',
		},
	],
};

export default sources;
