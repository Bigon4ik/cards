import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({

});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));


