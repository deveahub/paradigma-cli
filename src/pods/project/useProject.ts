import { useContext } from 'react';

import { PROJECT_CONFIG_DEFAULT_VALUE } from './constants';
import context from './context';

const useProject = () => {
	const project = useContext(context);
	return project
		? { ...project, created: true }
		: {
				...PROJECT_CONFIG_DEFAULT_VALUE,
				created: false,
		  };
};

export default useProject;
