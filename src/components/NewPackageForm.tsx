import { Box } from 'ink';
import { Form, FormProps } from 'ink-form';
import React from 'react';

import useInfoPackageFormSection from '@/pods/formSections/useInfoPackageFormSection';
import { NewPackageValues } from '@/pods/project/types';

export interface NewPackageFormProps {
	onSubmit: (values: NewPackageValues) => void;
}

const NewPackageForm = ({ onSubmit }: NewPackageFormProps) => {
	const infoPackageSection = useInfoPackageFormSection();

	const form: FormProps = {
		form: {
			title: 'New Package',
			sections: [
				infoPackageSection,
			],
		},
	};

	return (
  <Box flexDirection="column" width="100%">
    <Form {...form} onSubmit={onSubmit as any} />
  </Box>
	);
};

export default NewPackageForm;
