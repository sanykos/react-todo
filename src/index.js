import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer  from './store/reducers/rootReducer'
import App from './App';

const store = createStore(rootReducer)

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(
    app, document.getElementById('root')
);

