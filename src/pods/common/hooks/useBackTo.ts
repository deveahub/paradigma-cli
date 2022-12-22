import { useInput } from 'ink';

import useRouter from '@/components/router/useRouter';

export interface UseBackToProps {
	key?: string;
	path?: string;
	submit?: () => void;
	disabled?: boolean;
	backRouter?: boolean;
}

const useBackTo = (props?: UseBackToProps) => {
	const { back } = useRouter();
	const {
		submit,
		path = '/',
		key: wantedKey = 'º',
		disabled,
		backRouter = true,
	} = props || {};
	const { push } = useRouter();
	useInput((key) => {
		switch (true) {
			case Boolean(disabled):
				return;
			case key !== wantedKey:
				return;
			case Boolean(submit):
				(submit as Function)();
				break;
			case backRouter:
				back();
				break;
			default:
				push(path);
		}
	});
};

export default useBackTo;
