import { readFile, writeFile } from "fs/promises";
import gitClone from "git-clone/promise";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import useConfig from "../config/useConfig";
import initializeProjectAtom from "./initializeProjectAtom";
import { useApp } from "ink";

type Status = "initial" | "project-creation" | "finish";

const useInitializeProject = () => {
	const { exit } = useApp();
	const [status, setStatus] = useState<Status>("initial");
	const { name } = useRecoilValue(initializeProjectAtom);
	const { dirs, sources } = useConfig();

	const initializeProject = async () => {
		setStatus("project-creation");
		await gitClone(sources.monorepo[0].repository, dirs.root);
		await writeFile(
			dirs.rootPackageJSON,
			JSON.stringify({
				...JSON.parse((await readFile(dirs.rootPackageJSON)).toString()),
				name,
			})
		);

		setStatus("finish");
		setTimeout(exit, 500);
	};

	return {
		handlers: {
			initializeProject,
		},
		status,
	};
};

export default useInitializeProject;
