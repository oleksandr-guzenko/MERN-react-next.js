import { HYDRATE } from 'next-redux-wrapper'
import { AUTHENTICATE, DEAUTHENTICATE } from '../types'

export const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    }
  case AUTHENTICATE:
    return {
      ...state,
      token: action.payload
    }
  case DEAUTHENTICATE:
    return {
      token: null
    }
  default:
    return state
  }
}
