import { createContext } from 'react';

import { RootProject } from './types';

const context = createContext<RootProject | null>(null);

export default context;
