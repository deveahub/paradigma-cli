// import { projectFields } from '@/components/forms/fields';
// import { PROJECT_CONFIG_DEFAULT_VALUE } from '@/data/defaultValues';

// import useConfig from '../config/useConfig';
// import useRootPath from '../config/useRootPath';

// const useInfoPackageFormSection = () => {
// 	const config = useRootPath();
// 	const { packages, templates } = useConfig();

	// const packagesOptions = Object.keys(packages).map((sourceName) => ({
	// 	label: sourceName,
	// 	value: sourceName,
	// }));

	// const templatesOptions = Object.values(config.templates[templateScope]).map(
	// 	(template) => ({
	// 		label: template.name,
	// 		value: template.repository,
	// 	})
	// );
// 	return {
// 		title: 'Info',
// 		fields: [
// 			{
// 				type: 'select',
// 				name: 'template',
// 				label: 'Template',
// 				required: true,
// 				options: templatesOptions,
// 			},
// 			{
// 				type: 'select',
// 				name: 'source',
// 				label: 'Source',
// 				required: true,
// 				options: sourcesOptions,
// 			},
// 			...Object.values({
// 				...projectFields,
// 				author: {
// 					...projectFields.author,
// 					initialValue: PROJECT_CONFIG_DEFAULT_VALUE.author,
// 				},
//                 version: {
// 					...projectFields.version,
// 					initialValue: PROJECT_CONFIG_DEFAULT_VALUE.version,
// 				},
// 			}),
// 		],
// 	};
// };

// export default useInfoPackageFormSection;
