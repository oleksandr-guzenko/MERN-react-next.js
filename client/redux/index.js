import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default function initStore () {
  return createStore(
    reducer,
    bindMiddleware([thunk])
  )
}

export const wrapper = createWrapper(initStore)
