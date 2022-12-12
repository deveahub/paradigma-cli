import useConfig from '../config/useConfig';

const useTemplatesFormSection = () => {
	const config = useConfig();

	return {
		title: 'Templates',
		fields: Object.entries(config.templates).map(([source, templates]) => ({
			type: 'multiselect',
			name: source,
			label: source,
			options: Object.values(templates).map((r) => ({
				label: r.name,
				value: r.repository || [],
				source,
			})),
		})),
	};
};

export default useTemplatesFormSection;
