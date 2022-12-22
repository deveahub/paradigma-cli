import { atom } from 'recoil';

import { ProjectState } from './types';

const projectAtom = atom<ProjectState>({
	key: 'project',
	default: {
		root: null,
		modules: [],
		created: false,
	},
});

export default projectAtom;
