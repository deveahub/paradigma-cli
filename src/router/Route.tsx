import React from "react";
import { useContext, useEffect, useMemo } from "react";
import { context } from "./context";
import { Route as RouteProps } from "./types";

const Route = ({ component: Component, path, exact = false }: RouteProps) => {
	const { currentURL, routes, setState, push } = useContext(context);

	useEffect(() => {
		if (!routes.get(path)) {
			setState((curr) => {
				curr.routes.set(path, { component: Component, path, exact });
				return curr;
			});
		}

		return () => {
			setState((curr) => {
				curr.routes.delete(path);
				return curr;
			});
		};
	}, []);

	const match = useMemo(() => {
		if (exact) return path === currentURL;

		const regex = new RegExp(`^${path}`);
		return regex.test(currentURL);
	}, [path, exact, currentURL]);

	return match ? <Component currentURL={currentURL} push={push} /> : null;
};

export default Route;
