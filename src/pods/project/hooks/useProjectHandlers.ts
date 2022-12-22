import { resolve } from 'path';

import gitClone from 'git-clone/promise';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { ProjectFormValues } from '@/components/forms/fields';

import { makePackageGitObject, removeGitOnDir } from '../../common/utils/git';
import { readJSONFile, updateJSONFile } from '../../common/utils/json';
import useConfig from '../../config/useConfig';
import projectAtom from '../projectAtom';
import { MonorepoPackageJSON, PackageJSON } from '../types';

import useProjectPaths from './useProjectPaths';

const useProjectHandlers = () => {
	const setProject = useSetRecoilState(projectAtom);
	const {
		templates: {
			monorepo: {
				default: { repository: repositoryMonorepo },
			},
		},
	} = useConfig();
	const paths = useProjectPaths();

	const loadProject = useCallback(async () => {
		const packageJSON = await readJSONFile<MonorepoPackageJSON>(
			paths.rootPackageJSON,
			false
		);
		if (packageJSON) {
			setProject((curr) => ({
				...curr,
				root: packageJSON as any,
				created: Boolean(packageJSON),
			}));
			return packageJSON;
		}
		return null;
	}, [paths.rootPackageJSON, setProject]);

	const updateProject = useCallback(
		async ({ repositoryURL, ...projectData }: ProjectFormValues) => {
			const packageJSONPath = resolve(paths.root, 'package.json');

			await updateJSONFile<PackageJSON>(packageJSONPath, {
				...projectData,
				...(repositoryURL && {
					repository: makePackageGitObject(repositoryURL),
				}),
			});
			await loadProject();
		},
		[paths.root, loadProject]
	);

	const createMonorepo = useCallback(
		async (projectData: ProjectFormValues) => {
			await gitClone(repositoryMonorepo, paths.root);
			await removeGitOnDir(paths.root);
			await updateProject(projectData);
		},
		[paths.root, repositoryMonorepo, updateProject]
	);

	return {
		createMonorepo,
		loadProject,
		updateProject,
	};
};

export default useProjectHandlers;
