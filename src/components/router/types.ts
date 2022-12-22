import { FC } from 'react';

export interface RouteComponentProps {
	currentURL: string;
	push: (route: string, queryProps?: Record<string, string>) => void;
}

export type RouteComponent = FC<RouteComponentProps & Record<string, unknown>>;

export interface Route {
	path: string;
	exact?: boolean;
}

export type Routes = Record<Route['path'], Route>;
