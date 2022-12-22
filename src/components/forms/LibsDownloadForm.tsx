import { Form } from 'ink-form';
import React from 'react';

import { UnidentifiedLibs } from '@/pods/libs/types';

interface Source {
	title: string;
	key: string;
	libs: UnidentifiedLibs;
}

type ResultKeyType = `template-${string}` | `package-${string}`;

export interface LibsDownloadsFormResult {
	[scope: ResultKeyType]: string[];
}

export interface LibsDownloadsFormProps {
	sources: Source[];
	onSubmit: (values: LibsDownloadsFormResult) => void;
	title: string;
}

const LibsDownloadsForm = ({
	onSubmit,
	sources,
	title,
}: LibsDownloadsFormProps) => {
	const sourceSections = sources.map((source) => ({
		title: source.title,
		fields: Object.entries(source.libs).map(([scope, libs]) => ({
			title: scope,
			type: 'multiselect',
			name: `${source.key}-${scope}`,
			label: scope,
			options: libs.map(({ repository, name }) => ({
				label: name,
				value: repository,
			})),
		})),
	}));

	return (
  <Form
    form={{
				title,
				sections: sourceSections,
			}}
    onSubmit={onSubmit as any}
		/>
	);
};

export default LibsDownloadsForm;
