import React, { createContext } from "react";
import { Route } from "./types";

export type ContextState = {
	routes: Map<Route["path"], Route>;
	currentURL: string;
	parameters: Record<string, string>;
};

type ContextHandlers = {
	setState: React.Dispatch<React.SetStateAction<ContextState>>;
	push: (route: string) => void;
};

type Context = ContextState & ContextHandlers;

export const context = createContext<Context>({
	routes: new Map(),
	currentURL: "/",
	parameters: {},
	setState: () => {},
	push: () => {},
});
