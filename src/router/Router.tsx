import React, { useCallback, useState } from "react";
import { context, ContextState } from "./context";

interface RouterProps {
	children: JSX.Element | JSX.Element[];
	currentURL?: string;
}

const Router = ({ children, currentURL = "/" }: RouterProps) => {
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
