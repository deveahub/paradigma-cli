import { Form } from 'ink-form';
import React from 'react';

import { Lib } from '@/pods/libs/types';
import { PlainPackageJSON } from '@/pods/project/types';

import { projectFields } from './fields';

export type LibCreateFormValues = PlainPackageJSON & { template: string, scope: string };

export interface LibCreateFormProps {
	title: string;
	onSubmit: (values: LibCreateFormValues) => void;
	sources: Lib[];
	scopes: string[];
}

const LibCreateForm = ({
	onSubmit,
	title,
	sources: libs,
	scopes
}: LibCreateFormProps) => (
  <Form
    form={{
			title,
			sections: [
				{
					title: 'Info',
					fields: [
						{
							name: 'template',
							label: 'Template',
							required: true,
							type: 'select',
							options: libs.map((lib) => ({
								value: lib.repository,
								label: lib.name,
							})),
						},
						{
							name: 'scope',
							label: 'Scope',
							required: true,
							type: 'select',
							options: scopes.map((scope) => ({
								value: scope,
								label: scope,
							})),
						},
						...Object.values(projectFields),
					],
				},
			],
		}}
    onSubmit={onSubmit as any}
  />
);

export default LibCreateForm;
