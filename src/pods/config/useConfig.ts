import { useRecoilValue } from 'recoil';

import configAtom from './configAtom';

const useConfig = () => useRecoilValue(configAtom);

export default useConfig;
