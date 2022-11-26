import Text from "@/components/Text";
import useInitializeProject from "@/pods/initializeProject/useInitializeProject";
import { Box } from "ink";
import Spinner from "ink-spinner";
import React, { useEffect } from "react";

const MESSAGES: Record<
	ReturnType<typeof useInitializeProject>["status"],
	string
> = {
	initial: "Loading",
	"project-creation": "Creating project",
	finish: "Project created successfully",
};

const ProjectLoading = () => {
	const {
		status,
		handlers: { initializeProject },
	} = useInitializeProject();

	useEffect(() => {
		initializeProject();
	}, []);

	return (
		<Box>
			<Box width={2}>
				<Text color="success">
					<Spinner type="line" />
				</Text>
			</Box>
			<Text bold>{MESSAGES[status]}</Text>
		</Box>
	);
};

export default ProjectLoading;
