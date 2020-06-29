import { Message } from "./features/chat/types";
import { SystemState } from "./features/system/types";

export interface MessageTextCallback {
    (messageText: string) : void;
}


export interface MessageCallback {
    (message: Message) : void;
}


export interface SystemStateCallback {
    (state: SystemState) : void;
}