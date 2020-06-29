import { Message } from "./features/chat/types";

export interface MessageTextCallback {
    (messageText: string) : void;
}


export interface MessageCallback {
    (message: Message) : void;
}