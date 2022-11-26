import React, { ReactNode, useState } from 'react';

import stageContext, {
	StageState,
	STAGE_CONTEXT_INITIAL_STATE,
} from './stageContext';

interface StageProviderProps {
	children: ReactNode;
}

const StageProvider = ({ children }: StageProviderProps) => {
	const [state, setState] = useState<StageState>(STAGE_CONTEXT_INITIAL_STATE);

	return (
  <stageContext.Provider value={{ ...state, setState }}>
    {children}
  </stageContext.Provider>
	);
};

export default StageProvider;
