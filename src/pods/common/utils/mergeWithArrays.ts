const merge = <
	A extends Record<string, unknown>,
	B extends Record<string, unknown>
>(
	inputA: A,
	inputB: B
) => ({
	...inputA,
	...inputB,
});

const mergeWithArrays = <
	A extends Record<string, unknown>,
	B extends Record<string, unknown>
>(
	inputA: A,
	inputB: B
): A & B => Object.entries(inputA).reduce<any>((acc, [key, valueA]) => {
		const valueB = inputB[key];

		if (valueA && valueB && Array.isArray(valueA)) {
			return {
				...acc,
				[key]: [...valueA, ...(valueB as any)],
			};
		}

		if (
			valueA
			&& valueB
			&& typeof valueB === 'object'
			&& !Array.isArray(valueB)
		) {
			return merge(acc, {
				[key]: mergeWithArrays(valueA as any, valueB as any),
			});
		}

		return {
			...acc,
			[key]: valueA,
		};
	}, merge(inputA, inputB));

export default mergeWithArrays;
