import { createContext, Dispatch, SetStateAction } from 'react';

import { Stage } from './enums';

export interface StageState {
	stage: Stage;
}

export interface StageContext extends StageState {
  setState: Dispatch<SetStateAction<StageState>>
}

export const STAGE_CONTEXT_INITIAL_STATE: StageState = {
  stage: Stage.Start,
};

export const STAGE_CONTEXT_INITIAl_VALUE: StageContext = {
  ...STAGE_CONTEXT_INITIAL_STATE,
  setState: () => {},
};

const stageContext = createContext<StageContext>(STAGE_CONTEXT_INITIAl_VALUE);

export default stageContext;
