import { resolve } from 'path';
import { rm, writeFile, readFile, readdir, rmdir, lstat } from 'fs/promises';

import { omit } from 'remeda';

import { Sources } from '../config/types';

import { PackageJSON } from './types';
import { getNameFromRepository } from './repository';

export const readJSONFile = async <T extends Record<string, unknown>>(
	path: string
): Promise<T | null> => {
	try {
		const file = await readFile(path);
		return JSON.parse(file.toString());
	} catch (err) {
		return null;
	}
};

export const readPackageJSON = async (path: string) => {
	try {
		const file = await readFile(resolve(path, 'package.json'));
		const packageJSON = JSON.parse(file.toString()) as PackageJSON;
		return {
			...packageJSON,
			repository: packageJSON.repository?.url || '',
		};
	} catch (err) {
		return null;
	}
};

export const readPackageSources = async (rootPath: string) => {
	const sources = await readdir(rootPath);

	const readPackageSource = async (path: string): Promise<Sources> => {
		const packageJSON = await readPackageJSON(path);
		if (!packageJSON) return readPackageSources(path);
		return {
			[path.match(/.*\/(.+)\/.+$/)?.[1] || '']: [
				{
					repository: packageJSON?.repository.toString(),
					name:
						getNameFromRepository(packageJSON?.repository)
						|| packageJSON?.repository.toString(),
				},
			],
		};
	};

	const promises = sources
		.filter((n) => !n.match(/^(\.\w+|\w+\.\w+)$/))
		.map((p) => readPackageSource(resolve(rootPath, p)));

	const result = await Promise.all(promises);

	const processedSources = result.reduce<Sources>((acc, source) => {
		Object.keys(source).forEach((sourceName) => {
			acc[sourceName] = [
				...(acc[sourceName] || []),
				...(source[sourceName] || []),
			];
		});

		return acc;
	}, {});

	return processedSources;
};

export const removeGITOnModule = async (path: string) => {
	await rmdir(resolve(path, '.git'), { recursive: true });
};

export const createPackageJSON = async (
	path: string,
	data: Record<string, unknown>
) => {
	await writeFile(resolve(path, 'package.json'), JSON.stringify(data));
};

export const updatePackageJSON = async (
	path: string,
	data: Record<string, unknown>
) => {
	const currentPackageJSON = (await readPackageJSON(path)) || {};

	await rm(resolve(path, 'package.json'), { force: true });
	const { repository, ...newPackageJSON } = {
		...omit(currentPackageJSON as any || {}, ['repository']),
		...data,
	} as any;

	await createPackageJSON(path, {
		...newPackageJSON,
		...(repository && {
			repository: {
				type: 'git',
				url: repository,
			},
		}),
	});
};

export const existDirectory = async (path: string) => {
	try {
		await lstat(path);
		return true;
	} catch (err) {
		return false;
	}
};
