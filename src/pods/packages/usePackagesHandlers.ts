import { resolve } from 'path';

import gitClone from 'git-clone/promise';
import { useCallback } from 'react';

import useConfig from '../config/useConfig';
import { getNameFromRepository } from '../common/repository';
import { existDirectory, removeGITOnModule } from '../common/fs';
import logger from '../common/logger';

export type Modules = Array<{
	source: string;
	repository: string;
}>;

const usePackagesHandlers = () => {
	const { dirs } = useConfig();

	const addModule = useCallback(
		async (source: string, repository: string) => {
			const modulePath = resolve(
				dirs.root,
				source,
				getNameFromRepository(repository) || repository
			);
			try {
				const exists = await existDirectory(modulePath);
				if (exists) {
					logger.skipped(`add module ${source}:${repository}`);
				} else {
					await gitClone(repository, modulePath);
					await removeGITOnModule(modulePath);
				}
			} catch (err) {
				console.log('modulePath', repository);
				logger.error(['add module', err]);
			}
		},
		[dirs.root]
	);

	const addModules = useCallback(
		async (modules: Modules) => {
			const promises = modules.map((m) => addModule(m.source, m.repository));
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
