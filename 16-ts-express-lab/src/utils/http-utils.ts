import { AppError } from "../model/errors";

export function sendError(err: AppError, res) {
    console.error(err);
    res.status = err.status || 500;
    res.json({
        status: err.status,
        message: err.message,
        error: process.env.NODE_ENV === 'production' ? '' : err
    });
}