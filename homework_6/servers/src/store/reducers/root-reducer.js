import { serversHistoryReducer } from './servers/server-history-reducer';
import { serversReducer } from './servers/servers-reducer';
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    serversReducer,
    serversHistoryReducer
});