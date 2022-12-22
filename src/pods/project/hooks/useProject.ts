import { useRecoilValue } from 'recoil';

import projectAtom from '../projectAtom';
import {
	ProjectCreatedState,
	ProjectEmptyState,
	ProjectStatus,
} from '../types';

const useProject = <Status extends ProjectStatus = 'empty'>() => useRecoilValue(projectAtom) as Status extends 'empty'
		? ProjectEmptyState
		: ProjectCreatedState;

export default useProject;
