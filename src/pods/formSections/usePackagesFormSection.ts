import { Sources } from '../config/types';
import useConfig from '../config/useConfig';

const usePackagesFormSection = (packages: Sources = {}) => {
	const config = useConfig();

	return {
		title: 'Packages',
		fields: Object.entries(config.sources)
			.filter(([, repositories]) => repositories.length > 0)
			.map(([source, repositories]) => ({
				type: 'multiselect',
				name: source,
				label: source,
				initialValue: packages[source]?.map((x) => x.repository) || [],
				options: repositories.map((r) => ({
					label: r.name,
					value: r.repository,
					source,
				})),
			})),
	};
};

export default usePackagesFormSection;
