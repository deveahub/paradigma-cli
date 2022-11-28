const sources = {
	monorepo: [
		{
			repository: "https://github.com/rrios-dev/template-monorepo",
			name: "default",
		},
	],
	apps: [
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "NextJS",
		},
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "NextJS with API",
		},
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "NextJS Static",
		},
	],
	components: [
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "NextJS",
		},
	],
	utils: [
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "NextJS",
		},
	],
	services: [
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "Apollo/GraphQL API",
		},
		{
			repository: "https://github.com/rriosper/devaway-racing-services-demo",
			name: "Express API",
		},
	],
} as const;

export default sources;
