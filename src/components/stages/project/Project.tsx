import React from 'react';

import Route from '@/components/router/Route';

import ProjectInfo from './ProjectInfo';
import ProjectMenu from './ProjectMenu';

const Project = () => (
  <>
    <Route exact path="/" component={ProjectMenu} />
    <Route exact path="/info" component={ProjectInfo} />
  </>
);

export default Project;
