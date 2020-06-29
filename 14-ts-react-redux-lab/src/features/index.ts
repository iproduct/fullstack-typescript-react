import { combineReducers, applyMiddleware, createStore } from "redux";
import { systemReducer } from './system/reducers';
import { chatReducer } from './chat/reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ChatActionTypes } from './chat/types';
import { SystemActionTypes } from './system/types';

const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
    return store;
}

export type AllActionTypes = ChatActionTypes | SystemActionTypes;