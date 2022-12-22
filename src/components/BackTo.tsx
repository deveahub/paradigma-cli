import { ReactElement } from 'react';

import useBackTo, { UseBackToProps } from '@/pods/common/hooks/useBackTo';

interface BackToProps extends UseBackToProps {
	children: ReactElement;
}

const BackTo = ({ children, ...options }: BackToProps) => {
	useBackTo(options);

	return children;
};

export default BackTo;
