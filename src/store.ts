import {createStore as reduxCreateStore, combineReducers, GenericStoreEnhancer, Action} from 'redux';
import tab, {State as TabState, Actions as TabActions} from 'modules/tab';

export type ReduxState = {
    tab : TabState
}
  
export type ReduxAction = TabActions | Action

export function createStore(middleware: GenericStoreEnhancer) {
    const reducer = combineReducers({
        tab,
    })
    return reduxCreateStore(reducer, middleware)
}