// import { resolve } from 'path';

// import gitClone from 'git-clone/promise';
// import React from 'react';

// import NewPackageForm from '@/components/NewPackageForm';
// import { removeGITOnModule, updatePackageJSON } from '@/pods/common/fs';
// import useRootPath from '@/pods/config/useRootPath';
// import { NewPackageValues } from '@/pods/project/types';
// import useRouter from '@/pods/router/useRouter';
// import logger from '@/pods/common/utils/logger';
// import useBackTo from '@/pods/common/hooks/useBackTo';

// const NewPackageStage = () => {
// 	const { push } = useRouter();
// 	const { dirs } = useRootPath();
// 	useBackTo();
// 	const onSubmit = async ({
// 		name,
// 		version,
// 		author,
// 		repository,
// 		source,
// 		template,
// 	}: NewPackageValues) => {
// 		try {
// 			const packagePath = resolve(dirs.root, source, name);
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

// 			await removeGITOnModule(packagePath);
// 			logger.success(`[INFO] - Package created
// 				name: ${name}
// 				version: ${version}
// 				author: ${author}
// 				repository: ${repository}
// 				source: ${source}
// 				template: ${template}
// 			`);
// 		} catch (err) {
// 			logger.error('[ERROR] - Package not created', err);
// 		}
// 		push('/');
// 	};
// 	return <NewPackageForm onSubmit={onSubmit} />;
// };

// export default NewPackageStage;
