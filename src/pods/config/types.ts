import { Templates } from '@/data/templates';

import { UnidentifiedLibs } from '../libs/types';

export type ParadigmaExternalConfig = {
	packages?: UnidentifiedLibs;
	templates?: Templates;
};

export type ParadigmaConfig = {
	packages: UnidentifiedLibs;
	templates: Templates;
};
