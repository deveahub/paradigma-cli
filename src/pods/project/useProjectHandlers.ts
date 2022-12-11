import gitClone from 'git-clone/promise';

import { removeGITOnModule, updatePackageJSON } from '../common/fs';
import useConfig from '../config/useConfig';

import { RootProject } from './types';

const useProjectHandlers = () => {
	const { dirs, templates } = useConfig();

	const createMonorepo = async (projectData: RootProject) => {
		await gitClone(templates.monorepo.default.repository, dirs.root);
		await updatePackageJSON(dirs.root, projectData);
		await removeGITOnModule(dirs.root);
	};

	return {
		createMonorepo,
	};
};

export default useProjectHandlers;
