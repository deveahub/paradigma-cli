import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import { Item } from '@/components/Menu';

const LibsMenu = () => {
	const items: Item[] = [
		{
			label: 'Download',
			value: '/libs/download',
		},
		{
			label: 'Create',
			value: '/libs/create',
		},
	];

	return <MenuMaker items={items} />;
};

export default LibsMenu;
