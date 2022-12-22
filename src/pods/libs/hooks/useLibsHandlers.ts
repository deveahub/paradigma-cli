import { existsSync } from 'fs';
import { resolve } from 'path';

import gitClone from 'git-clone/promise';
import { useCallback } from 'react';

import {
	getNameFromRepositoryURL,
	removeGitOnDir,
} from '@/pods/common/utils/git';
import logger from '@/pods/common/utils/logger';
import useRootPath from '@/pods/config/useRootPath';
import { PackageJSON, PlainPackageJSON } from '@/pods/project/types';
import {
	updateJSONFile,
	updateJSONFileWithExt,
} from '@/pods/common/utils/json';

const useLibsHandlers = () => {
	const rootPath = useRootPath();

	const cloneLib = useCallback(
		async (repository: string, scope?: string) => {
			try {
				const name = getNameFromRepositoryURL(repository);

				if (!name) throw new Error('Invalid name');

				const path = scope
					? resolve(rootPath, scope, name)
					: resolve(rootPath, name);

				if (existsSync(path)) {
					logger.skipped('library already exists', scope, repository);
					return;
				}

				await gitClone(repository, path);
				logger.success('clone lib', repository);
			} catch (err) {
				logger.error('clone lib', '[useLibsHandlers::cloneLib]', err);
			}
		},
		[rootPath]
	);

	const createLib = useCallback(
		async (repository: string, scope: string, data: PackageJSON) => {
			try {
				const path = resolve(rootPath, scope, data.name);
				await gitClone(repository, path);

				if (!(await updateJSONFileWithExt(path, data))) {
					throw new Error('Cannot update package JSON');
				}
				if (!(await removeGitOnDir(path))) {
					throw new Error('Cannot remove .git folder');
				}

				logger.success(
					'create lib',
					scope,
					data.name,
					`	
				name: ${data.name}
				version: ${data.version}
				author: ${data.author}
				repository: ${data.repository?.url || 'none'}
				scope: ${scope}
				template: ${repository}
				`
				);
			} catch (err) {
				logger.error('create lib', '[useLibsHandlers::createLib]', err);
			}
		},
		[rootPath]
	);

	return {
		cloneLib,
		createLib,
	};
};

export default useLibsHandlers;
