import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger";

const logger = createLogger();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
));

export default store;
