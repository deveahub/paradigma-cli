import { useContext } from 'react';

import configContext from './configContext';
import sources from './sources';

const useConfig = () => {
	const config = useContext(configContext);

	if (!config) throw new Error('Config context is not valid');

	return { ...config, sources };
};

export default useConfig;
