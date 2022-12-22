import React, { useCallback } from 'react';

import BackTo from '@/components/BackTo';
import LibCreateForm, {
	LibCreateFormValues,
} from '@/components/forms/LibCreateForm';
import useRouter from '@/components/router/useRouter';
import { makePackageGitObject } from '@/pods/common/utils/git';
import useConfig from '@/pods/config/useConfig';
import useLibsHandlers from '@/pods/libs/hooks/useLibsHandlers';
import { LibType } from '@/pods/libs/types';
import useProject from '@/pods/project/hooks/useProject';

const LibsCreate = () => {
	const {
		goToRoot,
		parameters: { type, scope },
	} = useRouter();
	const { root } = useProject<'created'>();
	const { createLib } = useLibsHandlers();
	const libs = useConfig()[`${type as LibType}s`];
	const sources = libs[scope as keyof typeof libs];

	const onSubmit = useCallback(
		async ({
			template,
			repository,
			scope: scopeOut,
			...values
		}: LibCreateFormValues) => {
			await createLib(template, scopeOut, {
				...values,
				repository: makePackageGitObject(repository),
			});

			goToRoot();
		},
		[createLib, goToRoot]
	);

	return (
  <BackTo>
    <LibCreateForm
      onSubmit={onSubmit}
      title="Create Lib"
      sources={Array.isArray(sources) ? sources : Object.values(sources)}
      scopes={root.workspaces.map((x) => x.replace('/**', ''))}
    />
  </BackTo>
	);
};

export default LibsCreate;
