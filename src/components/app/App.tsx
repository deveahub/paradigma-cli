import { Box } from 'ink';
import BigText from 'ink-big-text';
import React from 'react';
import { RecoilRoot } from 'recoil';

import packageJSON from '@/../package.json';
import AppRouter from '@/components/app/AppRouter';
import Text from '@/components/Text';
import RootPathProvider from '@/pods/config/RootPathProvider';

import AppLoader from './AppLoader';

const App = () => (
  <Box display="flex" flexDirection="column" alignItems="center" width="100%">
    <Box marginBottom={1}>
      <BigText text="PARADIGMA" />
    </Box>
    <Box marginBottom={1} width="80%">
      <RecoilRoot>
        <RootPathProvider>
          <AppLoader>
            <AppRouter />
          </AppLoader>
        </RootPathProvider>
      </RecoilRoot>
    </Box>
    <Text color="info-dark-2">
      v
      {packageJSON.version}
    </Text>
  </Box>
);

export default App;
