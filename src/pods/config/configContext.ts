import { createContext } from "react";

export interface ConfigContext {
	dirs: {
		root: string;
		rootPackageJSON: string;
		packages: string;
		apps: string;
		services: string;
		"react-packages": string;
	};
}

const configContext = createContext<null | ConfigContext>(null);

export default configContext;
