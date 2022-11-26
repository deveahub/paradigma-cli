#!/usr/bin/env node
import { render } from "ink";
import meow from "meow";
import React from "react";
import ConfigProvider from "./pods/config/ConfigProvider";
import { Router, Route } from "./router";

import InitializeProject from "./stages/InitializeProject";
import InitialMenu from "./stages/InitialMenu/InitialMenu";

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
	<ConfigProvider>
		<Router>
			<Route exact path="/" component={InitialMenu} />
			<Route path="/initialize-project" component={InitializeProject} />
		</Router>
	</ConfigProvider>
);

export default cli;
