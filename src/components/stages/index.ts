import { FC } from 'react';

import { Stage } from '@/pods/stages/enums';

import Status from './Status';
import Start from './Start';

const stages: Record<Stage, FC> = {
	Start,
	Status,
	Init: Status,
};

export default stages;
