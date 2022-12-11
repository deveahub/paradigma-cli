import { Box } from 'ink';
import { Form, FormProps } from 'ink-form';
import React from 'react';

import useInfoPackageFormSection from '@/pods/formSections/useInfoPackageFormSection';
import { NewPackageValues } from '@/pods/project/types';

export interface NewAppFormProps {
	onSubmit: (values: NewPackageValues) => void;
}

const NewAppForm = ({ onSubmit }: NewAppFormProps) => {
	const infoPackageSection = useInfoPackageFormSection('apps');

	const form: FormProps = {
		form: {
			title: 'New App',
			sections: [
				{
					...infoPackageSection,
					fields: infoPackageSection.fields.filter((i) => i.name !== 'source'),
				},
			],
		},
	};

	return (
  <Box flexDirection="column" width="100%">
    <Form {...form} onSubmit={onSubmit as any} />
  </Box>
	);
};

export default NewAppForm;
