import { SystemState, UPDATE_SESSION, SystemActionTypes } from './types';

export function updateSession(newSession: SystemState): SystemActionTypes {
    return {
        type: UPDATE_SESSION,
        payload: newSession
    }
}