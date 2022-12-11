export const getNameFromRepository = (repository: string) => repository.match(/^.+\/(.+)$/)?.[1];
