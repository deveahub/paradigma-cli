import { useContext } from 'react';

import configContext from './configContext';
import sources from './sources';
import templates from './templates';

const useConfig = () => {
	const config = useContext(configContext);

	if (!config) throw new Error('Config context is not valid');

	return { ...config, sources, templates };
};

export default useConfig;
