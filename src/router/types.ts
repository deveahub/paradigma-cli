export interface RouteComponentProps {
	currentURL: string;
	push: (route: string, queryProps?: Record<string, string>) => void;
}

type RouteComponent = (props: RouteComponentProps) => JSX.Element;

export interface Route {
	path: string;
	exact?: boolean;
	component: RouteComponent;
}
