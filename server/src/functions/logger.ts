import { createLogger as createWinstonLogger, format, transports, Logger } from "winston";
import colors from "colors";

/**
 * Creates a logger with colored output for console.
 *
 * @param {string | number} [context="Socket"] - The context identifier for the logger.
 * @returns {Logger} - A configured Winston logger instance.
 */
export function Logger(context: string): Logger {
    return createWinstonLogger({
        level: "info",
        format: format.combine(
            format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss", // Example: 2025-01-15 14:30:45
            }),
            format.printf((info) => {
                const timestamp = colors.green(info.timestamp); // Green for timestamp
                const prefix = `[${colors.cyan(context)}]`; // Cyan for context
                const level = {
                    error: colors.red(info.level.toUpperCase()), // Red for errors
                    warn: colors.yellow(info.level.toUpperCase()), // Yellow for warnings
                    info: colors.blue(info.level.toUpperCase()), // Blue for info
                    debug: colors.magenta(info.level.toUpperCase()), // Magenta for debug
                    silly: colors.gray(info.level.toUpperCase()), // Gray for silly
                }[info.level] || colors.white(info.level.toUpperCase()); // Default color

                const message =
                    info.message instanceof Error
                        ? colors.red(`Error: ${info.message.message}\nStack: ${info.message.stack}`)
                        : info.message;

                return `${timestamp} ${prefix} ${level}: ${message}`;
            })
        ),
        transports: [
            new transports.Console(), 
        ],
    });
}
