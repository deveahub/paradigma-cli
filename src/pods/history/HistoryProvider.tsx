import React, { ReactNode, useCallback, useState } from 'react';

import context from './context';

interface HistoryProviderProps {
	children: ReactNode;
}

const HistoryProvider = ({ children }: HistoryProviderProps) => {
	const [version, setVersion] = useState(0);

	const setter = useCallback(() => setVersion((x) => x + 1), []);

	return (
  <context.Provider key={`version-${version}`} value={setter}>
    {children}
  </context.Provider>
	);
};

export default HistoryProvider;
