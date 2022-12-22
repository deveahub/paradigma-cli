import { resolve } from 'path';

import { useMemo } from 'react';

import useRootPath from '@/pods/config/useRootPath';

const useProjectPaths = () => {
	const rootPath = useRootPath();

	const paths = useMemo(() => {
		const root = rootPath;
		const rootPackageJSON = resolve(root, 'package.json');

		return {
			root,
			rootPackageJSON,
		};
	}, [rootPath]);

	return paths;
};

export default useProjectPaths;
