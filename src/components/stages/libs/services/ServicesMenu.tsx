import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import { Item } from '@/components/Menu';

const ServicesMenu = () => {
	const items: Item[] = [
		{
			label: 'Create',
			value: '/libs/create',
			parameters: {
				type: 'template',
				scope: 'services',
			},
		},
	];

	return <MenuMaker items={items} />;
};

export default ServicesMenu;
