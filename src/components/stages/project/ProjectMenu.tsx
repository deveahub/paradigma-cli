import React, { useMemo } from 'react';

import MenuMaker from '@/components/MenuMaker';
import useProjectHandlers from '@/pods/project/hooks/useProjectHandlers';
import logger from '@/pods/common/utils/logger';

const ProjectMenu = () => {
	const { loadProject } = useProjectHandlers();
	const items = useMemo(
		() => [
			{
				label: 'Info',
				value: '/project/info',
			},
			{
				label: 'Reload',
				value: '/project/reload',
				onClick: async () => {
					const project = await loadProject();
					logger.success('Project reloaded', project);
				},
			},
		],
		[loadProject]
	);

	return <MenuMaker items={items} />;
};

export default ProjectMenu;
