import { useContext } from 'react';

import context from './context';

const useHistory = () => {
	const dispatcher = useContext(context);

	if (!dispatcher) throw new Error('History context not available');

	return dispatcher;
};

export default useHistory;
