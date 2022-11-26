import Route from "@/router/Route";
import React from "react";
import { RecoilRoot } from "recoil";
import ProjectLoading from "./ProjectLoading";

import ProjectName from "./ProjectName";

const InitializeProject = () => {
	return (
		<RecoilRoot>
			<Route exact path="/initialize-project" component={ProjectName} />
			<Route
				exact
				path="/initialize-project/loading"
				component={ProjectLoading}
			/>
		</RecoilRoot>
	);
};

export default InitializeProject;
