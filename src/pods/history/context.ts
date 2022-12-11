import { createContext } from 'react';

type DispatcherVersion = () => void;

const context = createContext<null | DispatcherVersion>(null);

export default context;
