import React from 'react';

import Route from '@/components/router/Route';

import ConfigMenu from './ConfigMenu';

const Config = () => (
  <Route exact path="/" component={ConfigMenu} />
	);

export default Config;
