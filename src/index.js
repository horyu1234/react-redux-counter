import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"; // 추가
import {Provider} from "react-redux"; // 추가
import rootReducer from "./modules"; // 추가
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools()); // 추가

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
