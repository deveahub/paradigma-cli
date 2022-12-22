import React, { ReactNode, useMemo } from 'react';

import rootPathContext from './rootPathContext';

interface RootPathProviderProps {
	children: ReactNode;
}

const RootPathProvider = ({ children }: RootPathProviderProps) => {
	const rootDir = useMemo(
		() => `${process.cwd()}${
				process.env.NODE_ENV === 'development' ? '/dev-monorepo' : ''
			}`,
		[]
	);

	return (
  <rootPathContext.Provider value={rootDir}>{children}</rootPathContext.Provider>
	);
};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | undefined;
		}
	}
}

export default RootPathProvider;
