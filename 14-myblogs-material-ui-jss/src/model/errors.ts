export class AppError extends Error {
    constructor(public status: number, message: string, public error: Error) {
        super(message);
    }
}