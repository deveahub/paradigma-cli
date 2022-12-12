import { resolve } from 'path';

import gitClone from 'git-clone/promise';
import { useCallback } from 'react';

import useConfig from '../config/useConfig';
import { getNameFromRepository } from '../common/repository';
import {
	createDirectoryIfNotExists,
	existDirectory,
	removeGITOnModule,
} from '../common/fs';
import logger from '../common/logger';

interface AddModuleProps {
	source: string;
	repository: string;
	options?: {
		pathOnRoot?: string;
		skipGitRemove?: boolean;
	};
}

export type Modules = Array<{
	source: string;
	repository: string;
	options?: AddModuleProps['options'];
}>;

const usePackagesHandlers = () => {
	const { dirs } = useConfig();

	const addModule = useCallback(
		async ({ source, repository, options }: AddModuleProps) => {
			const modulePath = resolve(dirs.root, options?.pathOnRoot || source);
			const modulePackageName = resolve(
				modulePath,
				getNameFromRepository(repository) || repository
			);

			try {
				const exists = await existDirectory(modulePackageName);
				if (exists) {
					logger.skipped(`add module ${source}:${repository}`);
				} else {
					await createDirectoryIfNotExists(modulePath);
					await gitClone(repository, modulePackageName);
					if (!options?.skipGitRemove) {
						await removeGITOnModule(modulePackageName);
					}
				}
			} catch (err) {
				logger.error(['add module', err]);
			}
		},
		[dirs.root]
	);

	const addModules = useCallback(
		async (modules: Modules) => {
			const promises = modules.map(addModule);
			await Promise.all(promises);
		},
		[addModule]
	);

	return {
		addModule,
		addModules,
	};
};

export default usePackagesHandlers;
