import sources from '../config/sources';

export type RootProject = {
	name: string;
	version: string;
	author: string;
	repository: string;
};

export type NewPackageValues = RootProject & {
	source: keyof typeof sources;
	template: string;
};

export type NewAppValues = RootProject & {
	template: string;
};
