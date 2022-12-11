import useProject from '../project/useProject';

const useInfoFormSection = () => {
	const project = useProject();
	return {
		title: 'Info',
		fields: [
			{
				type: 'string',
				name: 'name',
				label: 'Name',
				initialValue: project.name,
				required: true,
			},
			{
				type: 'string',
				name: 'version',
				label: 'Version',
				initialValue: project.version,
				required: true,
			},
			{
				type: 'string',
				name: 'author',
				label: 'Author',
				initialValue: project.author,
				required: true,
			},
			{
				type: 'string',
				name: 'repository',
				label: 'Repository URL',
				initialValue: project.repository,
			},
		],
	};
};

export default useInfoFormSection;
