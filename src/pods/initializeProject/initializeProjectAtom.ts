import { atom } from "recoil";

interface InitializeProjectState {
	name: string;
	repositoryURL: string | null;
}

const initializeProjectAtom = atom<InitializeProjectState>({
	key: "initializeProject",
	default: {
		name: "default",
		repositoryURL: null,
	},
});

export default initializeProjectAtom;
