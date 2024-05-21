import { LogLevel, ErrorExposureDepth } from "@src/types/index";

export function getFrontendURL(): string {
    const frontednDevURL = process.env["FRONTEND_DEV_URL"];
    const frontendProdURL = process.env["FRONTEND_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? frontendProdURL : frontednDevURL;
}

export function getCurrentEnv(): "development" | "production" {
    return process.env["NODE_ENV"] || "development";
}

export function getCurrentPort(): number {
    return Number(process.env["PORT"]) || 5000;
}

export function getLogLevel(): LogLevel {
    return (process.env["LOG_LEVEL"] as LogLevel) || LogLevel.INFO;
}

export function getErrorExposureDepth(): ErrorExposureDepth {
    return (process.env["ERROR_EXPOSURE_DEPTH"] as ErrorExposureDepth) || "BUSINESS";
}
