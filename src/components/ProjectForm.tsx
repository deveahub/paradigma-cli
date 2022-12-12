import { Box } from 'ink';
import { Form, FormProps } from 'ink-form';
import React from 'react';

import useInfoFormSection from '@/pods/formSections/useInfoFormSection';
import usePackagesFormSection from '@/pods/formSections/usePackagesFormSection';
import { RootProject } from '@/pods/project/types';
import useProject from '@/pods/project/useProject';
import usePackages from '@/pods/packages/usePackages';

export type ProjectFormValues = RootProject & {
	[key: string]: string[];
};

export interface ProjectFormProps {
	onSubmit: (values: ProjectFormValues) => void;
}

const ProjectForm = ({ onSubmit }: ProjectFormProps) => {
	const project = useProject();
	const packages = usePackages();
	const infoSection = useInfoFormSection();
	const packagesSection = usePackagesFormSection(packages);

	const form: FormProps = {
		form: {
			title: project.name ? project.name : 'New Project',
			sections: [infoSection, packagesSection],
		},
	};

	return (
  <Box flexDirection="column" width="100%">
    <Form {...form} onSubmit={onSubmit as any} />
  </Box>
	);
};

export default ProjectForm;
