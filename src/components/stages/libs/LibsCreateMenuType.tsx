import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import { Item } from '@/components/Menu';
import useRouter from '@/components/router/useRouter';
import { LibType } from '@/pods/libs/types';

const LibsCreateMenuType = () => {
	const { push } = useRouter();

	const makePush = (type: LibType) => () => {
		push('/libs/create/scope', {
			type,
		});
	};

	const items: Item[] = [
		{
			label: 'Template',
			value: 'template',
			onClick: makePush('template'),
		},
		{
			label: 'Package',
			value: 'package',
			onClick: makePush('package'),
		},
	];
	return <MenuMaker items={items} />;
};

export default LibsCreateMenuType;
