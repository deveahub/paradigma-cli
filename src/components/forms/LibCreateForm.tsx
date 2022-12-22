import { Form, FormField } from 'ink-form';
import React from 'react';

import { Lib } from '@/pods/libs/types';
import { PlainPackageJSON } from '@/pods/project/types';

import { projectFields } from './fields';

export type LibCreateFormValues = PlainPackageJSON & {
	template: string;
	scope: string;
};

export interface LibCreateFormProps {
	title: string;
	onSubmit: (values: LibCreateFormValues) => void;
	sources: Lib[];
	scopes: string[];
	scope?: string;
}

const LibCreateForm = ({
	onSubmit,
	title,
	sources: libs,
	scopes,
	scope,
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
						!scope && {
							name: 'scope',
							label: 'Scope',
							required: true,
							type: 'select',
							options: scopes.map((s) => ({
								value: s,
								label: s,
							})),
						},
						...Object.values(projectFields),
					].filter(Boolean) as FormField[],
				},
			],
		}}
    onSubmit={
			(async (v: LibCreateFormValues) => onSubmit({ ...v, scope: scope || v.scope })) as any
		}
  />
);

export default LibCreateForm;
