// import { resolve } from 'path';

// import gitClone from 'git-clone/promise';
// import React from 'react';

// import NewAppForm from '@/components/NewAppForm';
// import useBackTo from '@/pods/common/hooks/useBackTo';
// import { updatePackageJSON } from '@/pods/common/fs';
// import logger from '@/pods/common/utils/logger';
// import useRootPath from '@/pods/config/useRootPath';
// import { NewAppValues } from '@/pods/project/types';
// import useRouter from '@/pods/router/useRouter';

// const NewAppStage = () => {
// 	const { push } = useRouter();
// 	const { dirs } = useRootPath();
// 	useBackTo();
// 	const onSubmit = async ({
// 		name,
// 		version,
// 		author,
// 		repository,
// 		template,
// 	}: NewAppValues) => {
// 		try {
// 			const packagePath = resolve(dirs.root, 'apps', name);
// 			await gitClone(template, packagePath);
// 			await updatePackageJSON(packagePath, {
// 				name,
// 				version,
// 				author,
// 				...(repository && {
// 					repository: {
// 						type: 'git',
// 						url: repository,
// 					},
// 				}),
// 			});
// 			logger.success(`[INFO] - App created
// 				name: ${name}
// 				version: ${version}
// 				author: ${author}
// 				repository: ${repository}
// 				source: apps
// 				template: ${template}
// 			`);
// 		} catch (err) {
// 			logger.error('[ERROR] - App not created', err);
// 		}
// 		push('/');
// 	};
// 	return <NewAppForm onSubmit={onSubmit} />;
// };

// export default NewAppStage;
