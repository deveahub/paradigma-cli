import { FormField } from 'ink-form';

import { PROJECT_CONFIG_DEFAULT_VALUE } from '@/data/defaultValues';

export type ValueOfField<T extends FormField> = T['type'] extends 'string'
	? string
	: null;

export type FormFields<V extends Record<string, FormField>> = {
	[K in keyof V]: V[K];
};

export type FormValues<Fields extends Record<string, FormField>> = {
	[K in keyof Fields]: Fields[K]['required'] extends true
		? ValueOfField<Fields[K]>
		: ValueOfField<Fields[K]> | undefined;
};

/** PROJECT */
export const projectFields = {
	name: {
		type: 'string',
		name: 'name',
		label: 'Name',
		required: true,
	},
	version: {
		type: 'string',
		name: 'version',
		label: 'Version',
		required: true,
		initialValue: PROJECT_CONFIG_DEFAULT_VALUE.version,
	},
	author: {
		type: 'string',
		name: 'author',
		label: 'Author',
		required: true,
		initialValue: PROJECT_CONFIG_DEFAULT_VALUE.author,
	},
	repositoryURL: {
		type: 'string',
		name: 'repositoryURL',
		label: 'Repository URL',
	},
} as const;

export type ProjectFields = FormFields<typeof projectFields>;
export type ProjectFormValues = FormValues<typeof projectFields>;
