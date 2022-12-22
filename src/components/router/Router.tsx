import React, {
	memo,
	ReactElement,
	useCallback,
	useRef,
	useState,
} from 'react';

import routerContext, { RouterContextState } from './routerContext';

export interface RouterProps {
	children: ReactElement | ReactElement[];
	defaultURL?: string;
}

const Router = ({ children, defaultURL = '/' }: RouterProps) => {
	const history = useRef<RouterContextState[]>([]);
	const [state, setState] = useState<RouterContextState>({
		currentURL: defaultURL,
		routes: {},
		parameters: {},
	});

	const push = useCallback(
		(newCurrentURL: string, parameters: Record<string, string> = {}) => {
			setState((curr) => {
				const newState = {
					...curr,
					currentURL: newCurrentURL,
					parameters,
				};

				history.current = [...history.current, newState];
				return newState;
			});
		},
		[]
	);

	const back = useCallback(() => {
		const properState = history.current[history.current.length - 2];
		if (properState) {
			setState(properState);
			history.current = history.current.slice(0, history.current.length - 1);
		} else {
			setState((curr) => ({
				...curr,
				currentURL: '/',
			}));
			history.current = [];
		}
	}, []);

	const goToRoot = useCallback(() => {
		push('/');
		history.current = [];
	}, [push]);

	return (
  <routerContext.Provider
    value={{ ...state, setState, push, back, goToRoot }}
		>
    {children}
  </routerContext.Provider>
	);
};

export default memo(Router);
