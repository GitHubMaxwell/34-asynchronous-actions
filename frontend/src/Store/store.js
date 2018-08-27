import { createStore, applyMiddleware, compose} from 'redux'
import { reporter }from './middleware.js'

import thunk from 'redux-thunk'
import rootReducer from '../Reducer/list-reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(reporter,thunk)));