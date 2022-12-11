import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { readPackageJSON } from '../common/fs';
import useConfig from '../config/useConfig';

import context from './context';
import { RootProject } from './types';

interface ProjectProviderProps {
	children: ReactNode;
}

const ProjectProvider = ({ children }: ProjectProviderProps) => {
	const {
		dirs: { root },
	} = useConfig();
	const [rootProject, setRootProject] = useState<RootProject | null>(null);
	const [isChecked, setIsChecked] = useState(false);

	const setProjectValues = useCallback(async () => {
		const packageJSON = await readPackageJSON(root);
		if (packageJSON) {
			setRootProject(packageJSON);
		}
		setIsChecked(true);
	}, [root]);

	useEffect(() => {
		setProjectValues();
	}, [setProjectValues]);

	return (
  <context.Provider value={rootProject}>
    {isChecked ? children : null}
  </context.Provider>
	);
};

export default ProjectProvider;
