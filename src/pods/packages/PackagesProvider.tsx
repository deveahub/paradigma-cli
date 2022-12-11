import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { readPackageSources } from '../common/fs';
import { Sources } from '../config/types';
import useConfig from '../config/useConfig';
import useProject from '../project/useProject';

import context from './context';

interface PackagesProviderProps {
	children: ReactNode;
}

const PackagesProvider = ({ children }: PackagesProviderProps) => {
	const [packages, setPackages] = useState<Sources>({});
	const [isChecked, setIsChecked] = useState(false);
	const {
		dirs: { root },
	} = useConfig();
	const { created } = useProject();

	const checkCurrentPackages = useCallback(async () => {
		if (created) {
			const sources = await readPackageSources(root);
			setPackages(sources);
		}
		setIsChecked(true);
	}, [root, created]);

	useEffect(() => {
		checkCurrentPackages();
	}, [checkCurrentPackages]);

	return (
  <context.Provider value={packages}>
    {isChecked ? children : null}
  </context.Provider>
	);
};

export default PackagesProvider;
