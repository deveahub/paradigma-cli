import React from 'react';

import Route from '@/router/Route';
import Router from '@/router/Router';
import NewPackageStage from '@/stages/NewPackageStage';
import ProjectStage from '@/stages/ProjectStage';
import useProject from '@/pods/project/useProject';
import NewAppStage from '@/stages/NewAppStage';

import Menu from './Menu';

const AppRouter = () => {
	const project = useProject();
	return (
  <Router defaultURL={project.created ? '/' : '/project'}>
    <Route exact path="/" component={Menu} />
    <Route exact path="/project" component={ProjectStage} />
    <Route exact path="/new-package" component={NewPackageStage} />
    <Route exact path="/new-app" component={NewAppStage} />
  </Router>
	);
};

export default AppRouter;
