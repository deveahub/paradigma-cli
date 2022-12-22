import { Box } from 'ink';
import Spinner from 'ink-spinner';
import React, {
	createContext,
	ReactElement,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

import useLoadConfig from '@/pods/config/useLoadConfig';
import useProjectHandlers from '@/pods/project/hooks/useProjectHandlers';

const appLoadContext = createContext<(() => void) | null>(null);

export const useApp = () => {
	const appLoad = useContext(appLoadContext);

	if (!appLoad) throw new Error('AppLoadContext is not available');

	return appLoad;
};

interface AppLoaderProps {
	children: ReactElement;
}

const AppLoader = ({ children }: AppLoaderProps) => {
	const [loadStatus, setLoadStatus] = useState<
		'initial' | 'loading' | 'loaded'
	>('initial');

	const { loadProject } = useProjectHandlers();
	const { loadConfig } = useLoadConfig();

	const load = useCallback(async () => {
		setLoadStatus('loading');
		await loadProject();
		await loadConfig();
		setLoadStatus('loaded');
	}, [loadProject, loadConfig]);

	useEffect(() => {
		if (loadStatus === 'initial') {
			load();
		}
	}, [load, loadStatus]);

	return loadStatus !== 'loaded' ? (
  <Box marginY={4}>
    <Spinner type="circleHalves" />
  </Box>
	) : (
  <appLoadContext.Provider value={load}>{children}</appLoadContext.Provider>
	);
};

export default AppLoader;
