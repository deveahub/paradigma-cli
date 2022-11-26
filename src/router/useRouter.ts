import { useContext } from "react";
import { context } from "./context";

const useRouter = () => {
	const { currentURL, push, parameters } = useContext(context);

	return {
		currentURL,
		push,
		parameters,
	};
};

export default useRouter;
