import pino from 'pino';

const transportConfig =
  process.env.NODE_ENV === 'development'
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      }
    : undefined;

export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  ...(transportConfig && { transport: transportConfig }),
});
