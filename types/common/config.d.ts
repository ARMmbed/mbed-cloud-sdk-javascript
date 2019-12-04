import { SDKLogLevel } from "./logger";
/**
 * Configuration class for the SDK
 */
export declare class Config {
    /**
     * The Pelion Device Management Api Key
     */
    get apiKey(): string;
    private static readonly ENV_API_KEY;
    private static readonly ENV_HOST;
    private static readonly ENV_LOG_LEVEL;
    /**
     * The host, will default to "https://api.us-east-1.mbedcloud.com"
     */
    readonly host: string;
    /**
     * The level of logging, will default to ERROR
     */
    readonly logLevel?: SDKLogLevel;
    private _apiKey;
    /**
     * Initalise a new isntance of Config
     * @param options The connection options
     */
    constructor(options?: ConfigOptions);
    private ensureBearer;
}
export interface ConfigOptions {
    /**
     * API Key for your Pelion Device Management account
     */
    apiKey?: string | (() => string);
    /**
     * URL for Pelion Device Management API
     */
    host?: string;
    /**
     * configure the log level for this api instance
     */
    logLevel?: SDKLogLevel;
}
