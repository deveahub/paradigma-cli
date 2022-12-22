import React from 'react';

import Route from '@/components/router/Route';

import LibsCreateRunway from './LibsCreateRunway';
import LibsDownload from './LibsDownload';
import LibsMenu from './LibsMenu';

const Libs = () => (
  <>
    <Route exact path="/" component={LibsMenu} />
    <Route exact path="/download" component={LibsDownload} />
    <Route path="/create" component={LibsCreateRunway} />
  </>
);

export default Libs;
