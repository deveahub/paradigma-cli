import { makeMenuMaker } from '@/components/MenuMaker';

const items = [
	{
		label: 'Project',
		value: '/project',
	},
	{
		label: 'Libs',
		value: '/libs',
	},
	{
		label: 'Apps',
		value: '/apps',
	},
	{
		label: 'Services',
		value: '/services',
	},
	{
		label: 'Config',
		value: '/config',
	},
	{
		label: 'Exit',
		value: '/exit',
	},
];

const RootMenu = makeMenuMaker({ items });

export default RootMenu;
