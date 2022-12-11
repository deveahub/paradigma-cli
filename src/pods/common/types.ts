export type PackageJSON = {
	name: string;
	author: string;
	repository?: {
		type: string;
		url: string;
	};
	version: string;
	scripts: Record<string, string>;
};
