#!/usr/bin/env node
import { render } from 'ink';
import meow from 'meow';
import React from 'react';

import App from '@/components/app/App';

const cli = meow(
	`
	Usage
	  $ paradigma
`,
	{
		flags: {},
	}
);

render(<App />);

export default cli;
