import { Box } from 'ink';
import { Form, FormProps } from 'ink-form';
import React from 'react';

import useTemplatesFormSection from '@/pods/formSections/useTemplatesFormSection';
import { NewPackageValues } from '@/pods/project/types';
import usePackagesFormSection from '@/pods/formSections/usePackagesFormSection';

export interface TemplatesFormProps {
	onSubmit: (values: NewPackageValues) => void;
}

const TemplatesForm = ({ onSubmit }: TemplatesFormProps) => {
	const templatesSection = useTemplatesFormSection();
	const packagesSection = usePackagesFormSection();

	const form: FormProps = {
		form: {
			title: 'Templates & Packages',
			sections: [templatesSection, packagesSection],
		},
	};

	return (
  <Box flexDirection="column" width="100%">
    <Form {...form} onSubmit={onSubmit as any} />
  </Box>
	);
};

export default TemplatesForm;
