import React, { createContext } from 'react';

import { Routes } from './types';

/** Router Context */
export type RouterContextState = {
	routes: Routes;
	currentURL: string;
	parameters: Record<string, string>;
};

type RouterContextHandlers = {
	setState: React.Dispatch<React.SetStateAction<RouterContextState>>;
	push: (route: string, parameters?: RouterContextState['parameters']) => void;
	back: () => void;
	goToRoot: () => void;
};

type Context = RouterContextState & RouterContextHandlers;

const routerContext = createContext<Context | null>(null);

export default routerContext;
