import useConfig from '../config/useConfig';
import usePackages from '../packages/usePackages';

const usePackagesFormSection = () => {
	const config = useConfig();
	const packages = usePackages();

	return {
		title: 'Packages',
		fields: Object.entries(config.sources).map(([source, repositories]) => ({
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
