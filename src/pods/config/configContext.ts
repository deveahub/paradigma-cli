import { createContext } from 'react';

export interface ConfigContext {
	dirs: {
		root: string;
		rootPackageJSON: string;
	};
}

const configContext = createContext<null | ConfigContext>(null);

export default configContext;
