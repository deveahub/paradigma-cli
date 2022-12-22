import { rmdir } from 'fs/promises';
import { resolve } from 'path';

import logger from './logger';

export const removeGitOnDir = async (filePath: string) => {
	try {
		await rmdir(resolve(filePath, '.git'), { recursive: true });
		return true;
	} catch (err) {
		logger.error(`removing GIT in dir ${filePath}`, err);
		return false;
	}
};

export const getNameFromRepositoryURL = (repository: string) => repository.match(/^.+\/(.+)$/)?.[1];

export const makePackageGitObject = (url: string) => ({
	type: 'git',
	url,
});
