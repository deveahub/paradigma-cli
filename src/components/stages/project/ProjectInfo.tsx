import React, { useCallback } from 'react';

import BackTo from '@/components/BackTo';
import { ProjectFormValues } from '@/components/forms/fields';
import ProjectForm from '@/components/forms/ProjectForm';
import useRouter from '@/components/router/useRouter';
import useProject from '@/pods/project/hooks/useProject';
import useProjectHandlers from '@/pods/project/hooks/useProjectHandlers';

const ProjectInfo = () => {
	const { goToRoot } = useRouter();
	const project = useProject<'created'>();

	const { createMonorepo, updateProject } = useProjectHandlers();

	const onSubmit = useCallback(
		async (formData: ProjectFormValues) => {
			if (project.root) {
				await updateProject(formData);
			} else {
				await createMonorepo(formData);
			}
			goToRoot();
		},
		[createMonorepo, goToRoot, project.root, updateProject]
	);

	return (
  <BackTo disabled={!project.created} path="/project">
    <ProjectForm
      onSubmit={onSubmit}
      title={project.root?.name || 'New Project'}
    />
  </BackTo>
	);
};

export default ProjectInfo;
