import { useInput } from 'ink';

import useRouter from '@/router/useRouter';

const useBackTo = (submit?: () => void) => {
	const { push } = useRouter();
	useInput((key) => {
		if (key !== 'º') return;

		if (submit) {
			submit();
			return;
		}
		push('/');
	});
};

export default useBackTo;
