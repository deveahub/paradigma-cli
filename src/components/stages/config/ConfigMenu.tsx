import React from 'react';

import MenuMaker from '@/components/MenuMaker';
import useLoadConfig from '@/pods/config/useLoadConfig';

const ConfigMenu = () => {
	const { loadConfig } = useLoadConfig();

	const items = [
		{
			label: 'Reload',
			value: '/config/reload',
			onClick: loadConfig,
			fallbackRedirect: '/',
		},
	];

	return <MenuMaker items={items} />;
};

export default ConfigMenu;
