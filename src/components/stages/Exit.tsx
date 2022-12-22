import { Box, useApp } from 'ink';
import React, { useEffect } from 'react';

import Text from '../Text';

const Exit = () => {
	const { exit } = useApp();

	useEffect(() => {
		exit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
  <Box width="100%" alignItems="center" justifyContent="center">
    <Text>😈 Godbye human - by @rriosdev 😈</Text>
  </Box>
	);
};

export default Exit;
