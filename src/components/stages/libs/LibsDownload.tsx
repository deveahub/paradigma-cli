import { resolve } from 'path';

import gitClone from 'git-clone/promise';
import React, { useCallback } from 'react';

import BackTo from '@/components/BackTo';
import LibCreateForm from '@/components/forms/LibCreateForm';
import useRouter from '@/components/router/useRouter';
import { makePackageGitObject } from '@/pods/common/utils/git';
import { updateJSONFile } from '@/pods/common/utils/json';
import logger from '@/pods/common/utils/logger';
import useProjectPaths from '@/pods/project/hooks/useProjectPaths';
import LibsDownloadsForm, {
	LibsDownloadsFormResult,
} from '@/components/forms/LibsDownloadForm';
import useConfig from '@/pods/config/useConfig';
import { Lib, UnidentifiedLibs } from '@/pods/libs/types';
import useProjectHandlers from '@/pods/project/hooks/useProjectHandlers';
import useLibsHandlers from '@/pods/libs/hooks/useLibsHandlers';

const LibsDownload = () => {
	const { push } = useRouter();
	const { packages, templates } = useConfig();
	const { cloneLib } = useLibsHandlers();
	const paths = useProjectPaths();
	const onSubmit = useCallback(
		async (libs: LibsDownloadsFormResult) => {
			// try {
			// 	const packagePath = resolve(paths.root, 'type', name);
			// 	await gitClone(template, packagePath);
			// 	await updateJSONFile(packagePath, {
			// 		name,
			// 		version,
			// 		author,
			// 		...(repository && {
			// 			repository: makePackageGitObject(repository),
			// 		}),
			// 	});
			// 	logger.success(`[INFO] - Lib created
			// 	name: ${name}
			// 	version: ${version}
			// 	author: ${author}
			// 	repository: ${repository}
			// 	scope: apps
			// 	template: ${template}
			// `);
			// } catch (err) {
			// 	logger.error('[ERROR] - Lib not created', err);
			// }
			try {
				const properLibs = Object.entries(libs).reduce<Promise<void>[]>(
					(acc, [key, lib]) => {
						const [, type, scope] = key.match(/^(template|package)-(.+)/) as [
							string,
							string,
							string
						];

						const properScope =	type === 'package' ? scope : `templates/${scope}`;

						lib.forEach((repository: string) => {
							acc.push(cloneLib(repository, properScope));
						});

						return acc;
					},
					[]
				);

				await Promise.all(properLibs);
			} catch (err) {
				logger.error('download libs', '[LibsDownload::onSubmit]', err);
			}

			push('/');
		},
		[cloneLib, push]
	);

	return (
  <BackTo path="/libs">
    <LibsDownloadsForm
      onSubmit={onSubmit}
      sources={[
					{
						title: 'Packages',
						key: 'package',
						libs: Object.entries(packages).reduce(
							(acc, [scope, libs]) => libs.length ? { ...acc, [scope]: libs } : acc,
							{}
						),
					},
					{
						title: 'Templates',
						key: 'template',
						libs: Object.entries(templates).reduce(
							(acc, [scope, lib]) => ({ ...acc, [scope]: Object.values(lib) }),
							{}
						),
					},
				]}
      title="Download libs"
    />
  </BackTo>
	);
};

export default LibsDownload;
