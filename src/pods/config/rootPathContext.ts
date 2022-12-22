import { createContext } from 'react';

const rootPathContext = createContext<null | string>(null);

export default rootPathContext;
