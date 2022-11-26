import React, { ReactNode, useMemo } from "react";
import { resolve } from "path";

import context from "./configContext";

interface ConfigProviderProps {
	children: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps) => {
	const rootDir = useMemo(
		() =>
			`${process.cwd()}${
				process.env.NODE_ENV === "development" ? "/dev-test" : ""
			}`,
		[]
	);

	return (
		<context.Provider
			value={{
				dirs: {
					root: rootDir,
					rootPackageJSON: resolve(rootDir, "package.json"),
					packages: resolve(rootDir, "packages"),
					apps: resolve(rootDir, "apps"),
					services: resolve(rootDir, "services"),
					"react-packages": resolve(rootDir, "react-packages"),
				},
			}}
		>
			{children}
		</context.Provider>
	);
};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | undefined;
		}
	}
}

export default ConfigProvider;
