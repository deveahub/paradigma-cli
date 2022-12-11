export interface SourceRepository {
	repository: string;
	name: string;
}

export type Sources = Record<string, SourceRepository[]>;
