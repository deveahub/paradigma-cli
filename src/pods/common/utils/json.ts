import * as fs from 'fs/promises';

import { merge } from 'remeda';

import logger from './logger';

export const readJSONFile = async <
	JSON extends Record<string, unknown> = Record<string, unknown>
>(
	filePath: string,
	debug = true
): Promise<JSON | null> => {
	try {
		const file = await fs.readFile(filePath);
		return JSON.parse(file.toString());
	} catch (err) {
		if (debug) {
			logger.error(`reading json in ${filePath}`, err);
		}
		return null;
	}
};

export const writeJSONFile = async <
	JSON extends Record<string, unknown> = Record<string, unknown>
>(
	filePath: string,
	json: JSON
): Promise<JSON | null> => {
	try {
		await fs.writeFile(filePath, JSON.stringify(json));
		return json;
	} catch (err) {
		logger.error(`writting json in ${filePath}`, err);
		return null;
	}
};

export const updateJSONFile = async <
	JSON extends Record<string, unknown> = Record<string, unknown>
>(
	filePath: string,
	json: Partial<JSON>
): Promise<JSON | null> => {
	try {
		const currentJSONFile = await readJSONFile(filePath);
		const newJSONFile = merge(currentJSONFile, json);
		await fs.writeFile(filePath, JSON.stringify(newJSONFile));

		return newJSONFile as JSON;
	} catch (err) {
		logger.error(`updating json in ${filePath}`, err);
		return null;
	}
};

export const updateJSONFileWithExt = async <
	JSON extends Record<string, unknown> = Record<string, unknown>
>(
	filePath: string,
	json: Partial<JSON>
): Promise<JSON | null> => updateJSONFile<JSON>(`${filePath}/package.json`, json);
