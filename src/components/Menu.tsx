import SelectInput from 'ink-select-input';
import React from 'react';

import useRouter from '@/components/router/useRouter';

interface ItemFunction {
	onClick: (item: ItemBase) => void;
	fallbackRedirect?: string;
	label: string;
	value: string;
}

interface ItemRouter {
	label: string;
	value: string;
	parameters?: Record<string, string>;
}

export type Item = ItemFunction | ItemRouter;

type ItemBase = Pick<Item, 'label' | 'value'>;

const isItemFunction = (props: ItemBase): props is ItemFunction => 'onClick' in props;

export interface MenuProps {
	items: Item[];
	prefixPath?: string;
}

const Menu = ({ items, prefixPath }: MenuProps) => {
	const { push } = useRouter();

	const onSelect = (item: Item) => {
		if (isItemFunction(item)) {
			const { onClick, fallbackRedirect } = items.find(
				(i) => i.value === item.value
			) as ItemFunction;

			onClick(item);
			if (fallbackRedirect) push(fallbackRedirect);
			return;
		}

		push(
			prefixPath ? `${prefixPath}/${item.value}` : item.value,
			item.parameters
		);
	};

	return <SelectInput items={items} onSelect={onSelect} />;
};

export default Menu;
