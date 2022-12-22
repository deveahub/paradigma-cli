import { useContext } from 'react';

import routerContext from './routerContext';

const useRouter = () => {
	const context = useContext(routerContext);

	if (!context) throw new Error('Router is not available');

	return context;
};

export default useRouter;
