import { useContext } from 'react';

import rootPathContext from './rootPathContext';

const useRootPath = () => {
	const rootPath = useContext(rootPathContext);

	if (!rootPath) throw new Error('Invalid root path');

	return rootPath;
};

export default useRootPath;
