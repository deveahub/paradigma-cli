enum LoggerLevel {
	Error = 'error',
	Info = 'info',
	Skipped = 'skipped',
	Success = 'success',
}

const LOGGER_EMOJI: Record<LoggerLevel, string> = {
	error: '🔴',
	info: '🔵',
	skipped: '⚪',
	success: '🟢',
};

const makeLogger =	(level: LoggerLevel) => (...props: Parameters<typeof console.log>) => {
		const logger = level === LoggerLevel.Error ? console.error : console.log;
		logger(`${LOGGER_EMOJI[level]} [${level.toUpperCase()}]`, ...props);
	};

const logger = {
	error: makeLogger(LoggerLevel.Error),
	info: makeLogger(LoggerLevel.Info),
	skipped: makeLogger(LoggerLevel.Skipped),
	success: makeLogger(LoggerLevel.Success),
};

export default logger;
