import { atom } from 'recoil';

import templates from '@/data/templates';
import packages from '@/data/packages';

import { ParadigmaConfig } from './types';

const configAtom = atom<ParadigmaConfig>({
	key: 'config',
	default: {
		packages,
		templates,
	},
});

export default configAtom;
