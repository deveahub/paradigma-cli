import { Box } from 'ink';
import { Form, FormProps, FormSection } from 'ink-form';
import React from 'react';
import { merge } from 'remeda';

import { PROJECT_CONFIG_DEFAULT_VALUE } from '@/data/defaultValues';
import useProject from '@/pods/project/hooks/useProject';

import { projectFields, ProjectFields } from './fields';

export interface ProjectFormProps {
	onSubmit: (values: any) => void;
	title: string;
	fields?: Partial<ProjectFields>;
}

const ProjectForm = ({ onSubmit, title, fields }: ProjectFormProps) => {
	const project = useProject<'created'>();
	const infoSection: FormSection = {
		title: 'Information',
		fields: Object.values(merge(projectFields, fields)).map((field) => {
			if (project.created) {
				const isRepositoryField = field.name === 'repositoryURL';
				const key = isRepositoryField ? 'repository' : field.name;
				// TODO: refactor this part
				return {
					...field,
					...(project.root
						&& key in project.root && {
							initialValue: isRepositoryField
								? (project.root[key] as any).url as string
								: project.root[key],
						}),
				};
			}

			const value =				PROJECT_CONFIG_DEFAULT_VALUE[
					field.name as keyof typeof PROJECT_CONFIG_DEFAULT_VALUE
				];

			return {
				...(value && { initialValue: value }),
				...field,
			};
		}),
	};

	const form: FormProps = {
		form: {
			title,
			sections: [infoSection],
		},
	};

	return (
  <Box flexDirection="column" width="100%">
    <Form {...form} onSubmit={onSubmit as any} />
  </Box>
	);
};

export default ProjectForm;
