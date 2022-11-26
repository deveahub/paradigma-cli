import useRouter from "@/router/useRouter";
import SelectInput from "ink-select-input";
import { Item } from "ink-select-input/build/SelectInput";
import React from "react";

type ItemValue = "initialize-project" | "add-packages" | "update-packages";

const menuOptions: Item<ItemValue>[] = [
	{
		label: "Initialize project",
		value: "initialize-project",
	},
	{
		label: "Add packages",
		value: "add-packages",
	},
	{
		label: "Update packages",
		value: "update-packages",
	},
];

const InitialMenu = () => {
	const { push } = useRouter();
	const handler = (item: Item<ItemValue>) => {
		switch (item.value) {
			case "initialize-project":
				push("/initialize-project");
				break;
			default:
				push("/");
				break;
		}
	};

	return (
		<>
			<SelectInput items={menuOptions} onSelect={handler} />
		</>
	);
};

export default InitialMenu;
