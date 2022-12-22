import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import { Item } from '@/components/Menu';

const AppLibsMenu = () => {
	const items: Item[] = [
		{
			label: 'Create',
			value: '/libs/create',
			parameters: {
				type: 'template',
				scope: 'apps',
				direct: 'true',
			},
		},
	];

	return <MenuMaker items={items} />;
};

export default AppLibsMenu;
