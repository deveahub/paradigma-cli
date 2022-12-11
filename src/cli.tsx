#!/usr/bin/env node
import { Box, render } from 'ink';
import BigText from 'ink-big-text';
import meow from 'meow';
import React from 'react';

import AppRouter from './components/AppRouter';
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
  </Box>
);

export default cli;
