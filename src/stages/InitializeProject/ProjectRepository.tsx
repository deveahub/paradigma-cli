import React, { useState } from "react";
import TextInput from "ink-text-input";
import { useSetRecoilState } from "recoil";
import initializeProjectAtom from "@/pods/initializeProject/initializeProjectAtom";
import useRouter from "@/router/useRouter";

// TODO: For the moment skip this step until get way to create git repository with personal token
const ProjectRepository = () => {
	const { push } = useRouter();
	const [repository, setRepository] = useState("");
	const setProjectInfo = useSetRecoilState(initializeProjectAtom);

	const onSubmit = (repositoryURL: string) => {
		if (repositoryURL) {
			setProjectInfo((curr) => ({ ...curr, repositoryURL }));
		}

		push("/initialize-project/loading");
	};

	return (
		<TextInput
			onChange={setRepository}
			value={repository}
			onSubmit={onSubmit}
			placeholder="Set repository URL"
		/>
	);
};

export default ProjectRepository;
