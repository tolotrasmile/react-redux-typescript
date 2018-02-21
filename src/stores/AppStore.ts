import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from '../reducers'

const middleWare = applyMiddleware(logger, thunk, promise())

export default createStore(reducer, middleWare)
