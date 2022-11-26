import React, { useState } from "react";
import TextInput from "ink-text-input";
import useRouter from "@/router/useRouter";
import { useSetRecoilState } from "recoil";
import initializeProjectAtom from "@/pods/initializeProject/initializeProjectAtom";

const ProjectName = () => {
	const setProjectInfo = useSetRecoilState(initializeProjectAtom);
	const { push } = useRouter();
	const [name, setName] = useState("");

	const onSubmit = (value: string) => {
		if (!value) return;
		setProjectInfo((curr) => ({ ...curr, name: value }));
		push("/initialize-project/loading");
	};

	return (
		<TextInput
			onChange={setName}
			value={name}
			onSubmit={onSubmit}
			placeholder="Set project name"
		/>
	);
};

export default ProjectName;
