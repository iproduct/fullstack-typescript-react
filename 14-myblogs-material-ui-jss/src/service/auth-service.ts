import { Credentials, LoggedUser } from '../model/auth';
import { handleErrorStausCodes } from './service-utils';

export const API_BASE = 'http://localhost:9000/api';

class AuthService {
    constructor(private apiUrl: string) {}

    async login(credentials: Credentials) {
        const resp = await fetch(`${this.apiUrl}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials),
        });
        return handleErrorStausCodes<LoggedUser>(resp);
    }

}



export default new AuthService(API_BASE);
