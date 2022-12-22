import { Route } from './types';

export const shouldRenderRoute = (
	currentURL: string,
	{ exact, path }: Route,
	prefix?: string | undefined
) => {
	const properPath = prefix ? `${prefix}${path}` : path;

	if (exact) return properPath === currentURL;

	const regex = new RegExp(`^${properPath}`);
	return regex.test(currentURL);
};
