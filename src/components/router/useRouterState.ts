import { useCallback, useContext, useState } from 'react';

import routerContext, { RouterContextState } from './routerContext';
import { Route } from './types';

const shouldRenderRoute = (
	currentURL: string,
	{ exact, path }: Route,
	prefix?: string | undefined
) => {
	const properPath = prefix ? `${prefix}${path}` : path;

	if (exact) return properPath === currentURL;

	const regex = new RegExp(`^${properPath}`);
	return regex.test(currentURL);
};

interface UseRouterStateProps {
    defaultURL: string;
    switchMode: boolean;
}

const useRouterState = ({ defaultURL, switchMode }: UseRouterStateProps) => {
    const currentContext = useContext(routerContext);
	const [state, setState] = useState<RouterContextState>({
		currentURL: defaultURL,
		routes: {},
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
		[]
	);

	const componentRoutes = switchMode
	// eslint-disable-next-line max-len
		? [Object.values(state.routes).find((r) => shouldRenderRoute(state.currentURL, r, currentContext?.currentURL))]
			.filter(Boolean) as Route[]
		// eslint-disable-next-line max-len
		: Object.values(state.routes).filter((r) => shouldRenderRoute(state.currentURL, r, currentContext?.currentURL));

    return {
        componentRoutes,
        push,
		state,
		setState
    };
};

export default useRouterState;
