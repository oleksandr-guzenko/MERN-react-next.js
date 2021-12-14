import thunk from 'redux-thunk'
import reducer from './reducers/index'
import {createWrapper} from 'next-redux-wrapper'
import {initialState} from 'redux/reducers/authReducer'
import {createStore, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const initStore = () => {
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose

  return createStore(
    reducer, 
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default createWrapper(initStore, {debug: true})