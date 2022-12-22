import { resolve } from 'path';

import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { merge } from 'remeda';
import { useCallback } from 'react';

import templates, { Templates } from '@/data/templates';
import { UnidentifiedLibs } from '@/pods/libs/types';
import { readJSONFile } from '@/pods/common/utils/json';
import mergeWithArrays from '@/pods/common/utils/mergeWithArrays';
import packages from '@/data/packages';

import configAtom from './configAtom';
import { ParadigmaExternalConfig } from './types';
import useRootPath from './useRootPath';

interface AddLibsConfigProps {
	templates?: Partial<Templates>;
	packages?: UnidentifiedLibs;
}

const useLoadConfig = () => {
	const rootPath = useRootPath();
	const setConfig = useSetRecoilState(configAtom);

	const updateLibsConfig = useCallback(
		async (data: AddLibsConfigProps, overwrite = true) => {
			setConfig((curr) => {
				const baseTemplates = overwrite
					? { templates, packages }
					: { templates: curr.templates, packages: curr.packages };
				return {
					packages: data.packages
						? mergeWithArrays(baseTemplates.packages, data.packages)
						: baseTemplates.packages,
					templates: data.templates
						? merge(baseTemplates.templates, data.templates)
						: baseTemplates.templates,
				};
			});
		},
		[setConfig]
	);

	const loadConfig = useCallback(async () => {
		const externalConfig = await readJSONFile<ParadigmaExternalConfig>(
			resolve(rootPath, 'paradigma.json'),
			false
		);

		await updateLibsConfig({
			templates: externalConfig?.templates,
			packages: externalConfig?.packages,
		});
	}, [rootPath, updateLibsConfig]);

	return {
		loadConfig,
		updateLibsConfig,
	};
};

export default useLoadConfig;
