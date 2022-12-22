// import { Sources } from '../config/types';
// import useRootPath from '../config/useRootPath';

// const usePackagesFormSection = (packages: Sources = {}) => {
// 	const config = useRootPath();

// 	return {
// 		title: 'Packages',
// 		fields: Object.entries(config.sources)
// 			.filter(([, repositories]) => repositories.length > 0)
// 			.map(([source, repositories]) => ({
// 				type: 'multiselect',
// 				name: source,
// 				label: source,
// 				initialValue: packages[source]?.map((x) => x.repository) || [],
// 				options: repositories.map((r) => ({
// 					label: r.name,
// 					value: r.repository,
// 					source,
// 				})),
// 			})),
// 	};
// };

// export default usePackagesFormSection;
