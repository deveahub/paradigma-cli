#!/usr/bin/env node
import { Box, render } from 'ink';
import BigText from 'ink-big-text';
import meow from 'meow';
import React from 'react';

import packageJSON from '../package.json';

import AppRouter from './components/AppRouter';
import Text from './components/Text';
import ConfigProvider from './pods/config/ConfigProvider';
import HistoryProvider from './pods/history/HistoryProvider';
import PackagesProvider from './pods/packages/PackagesProvider';
import ProjectProvider from './pods/project/ProjectProvider';

const cli = meow(
	`
	Usage
	  $ paradigma
`,
	{
		flags: {},
	}
);

render(
  <Box display="flex" flexDirection="column" alignItems="center">
    <BigText text="PARADIGMA" />
    <Box marginY={1} />
    <HistoryProvider>
      <ConfigProvider>
        <ProjectProvider>
          <PackagesProvider>
            <AppRouter />
          </PackagesProvider>
        </ProjectProvider>
      </ConfigProvider>
    </HistoryProvider>
    <Text color="info-dark-2">
      v
      {packageJSON.version}
    </Text>
  </Box>
);

export default cli;
