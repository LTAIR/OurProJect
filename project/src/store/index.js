import rootRender from './reducer'
import {createStore,
        applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
export default createStore(rootRender,applyMiddleware(thunk));