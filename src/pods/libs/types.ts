export interface Lib {
	repository: string;
	name: string;
}

export interface IdentifiedLibs {
	[scope: string]: {
		[name: string]: Lib;
	};
}

export interface UnidentifiedLibs {
	[scope: string]: Lib[];
}

export type LibType = 'package' | 'template';
