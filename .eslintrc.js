module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: [
		"plugin:react/recommended",
		"airbnb-typescript",
		"airbnb",
		"plugin:import/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		sourceType: "module",
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {},
		},
	},
	plugins: ["react", "@typescript-eslint", "import", "react-hooks"],
	rules: {
		"import/no-extraneous-dependencies": [
			"error",
			{ devDependencies: ["**/*.test.ts"] },
		],
		camelcase: "off",
		"react/jsx-no-constructed-context-values": 'off',
		"@typescript-eslint/naming-convention": "off",
		"no-shadow": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		indent: "off",
		"@typescript-eslint/indent": ["error"],
		"import/no-import-module-exports": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-use-before-define": "error",
		"arrow-body-style": ["error", "as-needed"],
		"import/extensions": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{ devDependencies: ["**/*.test.tsx", "**/*.test.ts"] },
		],
		"no-tabs": "off",
		"sort-keys": ["error", "asc"],
		"import/prefer-default-export": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"no-restricted-exports": "off",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"@typescript-eslint/indent": "off",
		"react/function-component-definition": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-props-no-spreading": "off",
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": "off",
		"@typescript-eslint/comma-dangle": "error",
		"@typescript-eslint/comma-dangle": "off",
		"object-curly-newline": "off",
		"comma-dangle": "off",
		"sort-keys": "off",
		"no-confusing-arrow": "off",
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				pathGroups: [
					{
						pattern: "@rrios-dev/**",
						group: "internal",
						position: "after",
					},
				],
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type",
				],
			},
		],
		quotes: [2, "single", { avoidEscape: true }],
	},
};
