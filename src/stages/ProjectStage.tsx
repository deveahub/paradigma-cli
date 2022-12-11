import React from 'react';

import ProjectForm, { ProjectFormValues } from '@/components/ProjectForm';
import usePackagesHandlers, {
	Modules,
} from '@/pods/packages/usePackagesHandlers';
import useProjectHandlers from '@/pods/project/useProjectHandlers';
import useRouter from '@/router/useRouter';
import { updatePackageJSON } from '@/pods/common/fs';
import useConfig from '@/pods/config/useConfig';
import useProject from '@/pods/project/useProject';
import useBackTo from '@/hooks/useBackTo';
import useHistory from '@/pods/history/useHistory';

const ProjectStage = () => {
	const project = useProject();
	const { addModules } = usePackagesHandlers();
	const { createMonorepo } = useProjectHandlers();
	const { push } = useRouter();
	const history = useHistory();
	const config = useConfig();
	useBackTo();

	const onSubmit = async ({
		name,
		version,
		author,
		repository,
		...sources
	}: ProjectFormValues) => {
		const data = { name, version, author, repository };
		if (!project.created) {
			await createMonorepo({ name, version, author, repository });
			await updatePackageJSON(config.dirs.root, {
				...data,
				repository: {
					type: 'git',
					url: repository,
				},
			});
		}

		const parsedSourceModules = Object.entries(sources).reduce<Modules>(
			(acc, [source, repositories]) => [
				...acc,
				...repositories.map((r) => ({ repository: r, source })),
			],
			[]
		);

		await addModules(parsedSourceModules);
		push('/');
		history();
	};
	return <ProjectForm onSubmit={onSubmit} />;
};

export default ProjectStage;
