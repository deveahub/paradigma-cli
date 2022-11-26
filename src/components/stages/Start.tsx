import React from "react";
import SelectInput from "ink-select-input";

import { Stage } from "@/pods/stages/enums";
import useStageState from "@/pods/stages/useStageState";

const Start = () => {
	const {
		handlers: { setStage },
	} = useStageState();
	const items = [
		{
			label: "Initialize monorepo",
			value: Stage.Init,
		},
	];

	return (
		<SelectInput items={items} onSelect={({ value }) => setStage(value)} />
	);
};

export default Start;
