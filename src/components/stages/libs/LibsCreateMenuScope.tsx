import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import useRouter from '@/components/router/useRouter';
import useConfig from '@/pods/config/useConfig';
import { LibType } from '@/pods/libs/types';
import { Item } from '@/components/Menu';

const LibsCreateMenuScope = () => {
	const { push, parameters: { type } = {} } = useRouter();
	const data = useConfig()[`${type as LibType}s`];

	const items: Item[] = Object.keys(data).map((scope) => ({
			label: scope,
			value: scope,
			onClick: () => {
				push('/libs/create/form', { type: type as string, scope });
			},
		}));
	return <MenuMaker items={items} />;
};

export default LibsCreateMenuScope;
