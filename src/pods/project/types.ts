export type PackageJSONRepository = {
	type: string;
	url: string;
};

export type PackageJSON = {
	name: string;
	version?: string;
	author?: string;
	repository?: PackageJSONRepository;
};

export type PlainPackageJSON = Omit<PackageJSON, 'repository'> & {
	repository: string;
};

export type MonorepoPackageJSON = {
	name: string;
	version: string;
	author: string;
	private: true;
	workspaces: string[];
	repository?: PackageJSONRepository;
};

interface ProjectStateBase {
	modules: PackageJSON[];
}

export type ProjectStatus = 'empty' | 'created';

export interface ProjectCreatedState extends ProjectStateBase {
	root: MonorepoPackageJSON;
	created: true;
}

export interface ProjectEmptyState extends ProjectStateBase {
	root: null;
	created: false;
}

export type ProjectState = ProjectCreatedState | ProjectEmptyState;
