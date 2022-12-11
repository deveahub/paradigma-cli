import React, { ReactElement, useCallback, useState } from 'react';

import { context, ContextState } from './context';

interface RouterProps {
	children: ReactElement | ReactElement[];
	defaultURL?: string;
}

const Router = ({ children, defaultURL: currentURL = '/' }: RouterProps) => {
	const [state, setState] = useState<ContextState>({
		currentURL,
		routes: new Map(),
		parameters: {},
	});

	const push = useCallback(
		(newCurrentURL: string, parameters: Record<string, string> = {}) => {
			setState((curr) => ({
				...curr,
				currentURL: newCurrentURL,
				parameters,
			}));
		},
		[setState]
	);

	return (
  <context.Provider value={{ ...state, setState, push }}>
    {children}
  </context.Provider>
	);
};

export default Router;
