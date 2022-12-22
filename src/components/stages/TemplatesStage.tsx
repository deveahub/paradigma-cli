// import React from 'react';

// import TemplatesForm from '@/components/TemplatesForm';
// import useBackTo from '@/pods/common/hooks/useBackTo';

// import usePackagesHandlers, {
// 	Modules,
// } from '@/pods/packages/usePackagesHandlers';
// import useHistory from '@/pods/history/useHistory';

// const TemplatesStage = () => {
// 	const history = useHistory();
// 	const { addModules } = usePackagesHandlers();
// 	useBackTo();

// 	const onSubmit = async (values: Record<string, string[]>) => {
// 		const parsedSourceModules = Object.entries(values).reduce<Modules>(
// 			(acc, [source, repositories]) => [
// 				...acc,
// 				...repositories.map((r) => ({
// 					repository: r,
// 					source,
// 					options: {
// 						skipGitRemove: true,
// 						pathOnRoot: `dev/${
// 							r.match(/\/template-(\w+|-)+$/) ? 'templates' : 'sources'
// 						}/${source}`,
// 					},
// 				})),
// 			],
// 			[]
// 		);
// 		await addModules(parsedSourceModules);
// 		history();
// 	};

// 	return <TemplatesForm onSubmit={onSubmit as any} />;
// };

// export default TemplatesStage;
