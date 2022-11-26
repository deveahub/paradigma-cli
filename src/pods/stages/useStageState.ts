import { useContext } from 'react';

import { Stage } from './enums';
import stageContext from './stageContext';

const useStageState = () => {
	const { setState, ...state } = useContext(stageContext);

	const setStage = (stage: Stage) => setState((curr) => ({ ...curr, stage }));

	return {
		state,
		handlers: {
			setStage,
		},
	};
};

export default useStageState;
