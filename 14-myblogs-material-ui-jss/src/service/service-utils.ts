import { AppError } from "../model/errors";

export async function handleErrorStausCodes<T>(resp: Response): Promise<T> {
    if (resp.status < 400) {
        const entity = await resp.json();
        return entity as T;
    } else {
        const err = await resp.json() as AppError;
        throw err;
    }
}


// error message utils
interface ValidationError {
    message: string;
    validation: string,
    field: string;
}


interface ValidationErrors {
    message: string;
    error: ValidationError[];
    status?: number;
}

export function getErrorMessage(err: any) {
    if (err.message) {
        return err.message as string;
    } else if (err.error) {
        const error = err as ValidationErrors;
        return error.error.map(e => e.message).join('. ');
    } else {
        return JSON.stringify(err);
    }
}