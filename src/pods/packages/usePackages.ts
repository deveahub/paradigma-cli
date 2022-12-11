import { useContext } from 'react';

import context from './context';

const usePackages = () => useContext(context);

export default usePackages;
