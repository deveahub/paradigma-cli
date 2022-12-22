import React from 'react';

import useLoadConfig from '@/pods/config/useLoadConfig';
import useProjectHandlers from '@/pods/project/hooks/useProjectHandlers';

import MenuMaker from '../MenuMaker';

const ReloadStage = () => {
	const { loadProject } = useProjectHandlers();
	const { loadConfig } = useLoadConfig();
	const items = [
		{
			label: 'Config',
			value: 'config',
			onClick: loadConfig,
			fallbackRedirect: '/',
		},
		{
			label: 'Project',
			value: 'project',
			onClick: loadProject,
			fallbackRedirect: '/',
		},
	];

	return <MenuMaker items={items} />;
};

export default ReloadStage;
