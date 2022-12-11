import { createContext } from 'react';

import { Sources } from '@/pods/config/types';

const context = createContext<Sources>({});

export default context;
