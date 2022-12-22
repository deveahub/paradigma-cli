import React, { createContext, memo, useContext, useEffect } from 'react';

import { Route as RouteData, RouteComponent, Routes } from './types';
import useRouter from './useRouter';
import { shouldRenderRoute } from './utils';

interface RouteProps extends RouteData {
	component: RouteComponent;
}

const routeContext = createContext<RouteData | null>(null);

const Route = ({ component: Component, path, exact = false }: RouteProps) => {
	const context = useContext(routeContext);
	const { routes, setState, currentURL, push } = useRouter();
	const properPath = context?.path ? `${context.path}${path}` : path;
	const isRegistered = Boolean(routes[properPath]);

	useEffect(() => {
		if (!isRegistered) {
			setState((curr) => ({
				...curr,
				routes: {
					...curr.routes,
					[properPath]: { path: properPath, exact },
				},
			}));
		}

		return () => {
			setState((curr) => ({
				...curr,
				routes: Object.values(curr.routes).reduce<Routes>(
					(acc, r) => (r.path === properPath ? acc : { ...curr.routes, [r.path]: r }),
					{}
				),
			}));
		};
	}, [Component, exact, isRegistered, setState, currentURL, properPath]);

	const shouldRender = shouldRenderRoute(
		context?.path && path === '/' ? `${currentURL}/` : currentURL,
		{
			exact,
			path: properPath,
		}
	);

	return shouldRender ? (
  <routeContext.Provider
    value={{
				path: properPath,
				exact,
			}}
		>
    <Component currentURL={currentURL} push={push} />
  </routeContext.Provider>
	) : null;
};

export default memo(Route);
