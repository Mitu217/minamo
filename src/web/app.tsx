import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore} from 'store';

import Tab from './containers/tab';

class Application extends React.Component {
    render() {
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(applyMiddleware(
            sagaMiddleware
        ))
        return (
            <Provider store={store}>
                <Tab />
            </Provider>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.querySelector('.content')
);