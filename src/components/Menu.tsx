import React from 'react';
import SelectInput from 'ink-select-input';
import { Box } from 'ink';

import useRouter from '@/router/useRouter';

const items = [
	{
		label: 'PROJECT',
		value: '/project',
	},
	{
		label: 'NEW PACKAGE',
		value: '/new-package',
	},
	{
		label: 'NEW APP',
		value: '/new-app',
	},
	{
		label: 'TEMPLATES DEV',
		value: '/templates',
	},
];

const Menu = () => {
	const { push } = useRouter();

	return (
  <Box width="100%">
    <SelectInput items={items} onSelect={({ value }) => push(value)} />
  </Box>
	);
};

export default Menu;
