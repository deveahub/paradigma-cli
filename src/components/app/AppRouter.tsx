import React from 'react';

import Route from '@/components/router/Route';
import Router from '@/components/router/Router';
import RootMenu from '@/components/stages/RootMenu';
import useProject from '@/pods/project/hooks/useProject';

import Project from '../stages/project';
import Exit from '../stages/Exit';
import Libs from '../stages/libs';
import Config from '../stages/config';
import AppLibsMenu from '../stages/libs/apps/AppLibsMenu';
import ServicesMenu from '../stages/libs/services/ServicesMenu';

const AppRouter = () => {
	const project = useProject();

	return (
  <Router defaultURL={project.created ? '/' : '/project/info'}>
    <Route exact path="/" component={RootMenu} />
    <Route path="/project" component={Project} />
    <Route path="/libs" component={Libs} />
    <Route path="/services" component={ServicesMenu} />
    <Route path="/apps" component={AppLibsMenu} />
    <Route path="/config" component={Config} />
    <Route path="/exit" component={Exit} />
  </Router>
	);
};

export default AppRouter;
