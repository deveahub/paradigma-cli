import templates from '../config/templates';
import useConfig from '../config/useConfig';

const useInfoPackageFormSection = (templateScope: keyof typeof templates = 'packages') => {
	const config = useConfig();

	const sourcesOptions = Object.keys(config.sources).map((sourceName) => ({
		label: sourceName,
		value: sourceName,
	}));

	const templatesOptions = Object.values(config.templates[templateScope]).map(
		(template) => ({
			label: template.name,
			value: template.repository,
		})
	);
	return {
		title: 'Info',
		fields: [
			{
				type: 'select',
				name: 'template',
				label: 'Template',
				required: true,
				options: templatesOptions,
			},
			{
				type: 'select',
				name: 'source',
				label: 'Source',
				required: true,
				options: sourcesOptions,
			},
			{
				type: 'string',
				name: 'name',
				label: 'Name',
				required: true,
			},
			{
				type: 'string',
				name: 'version',
				label: 'Version',
				initialValue: '1.0.0',
				required: true,
			},
			{
				type: 'string',
				name: 'author',
				label: 'Author',
				initialValue: 'Roberto Ríos <contact@rrios.dev>',
				required: true,
			},
			{
				type: 'string',
				name: 'repository',
				label: 'Repository URL',
				initialValue: '',
			},
		],
	};
};

export default useInfoPackageFormSection;
