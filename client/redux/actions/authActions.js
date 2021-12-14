import axios from 'axios'
import Router from 'next/router'
import {USER_API_URL} from 'config/api.config'
import {AUTHENTICATE, DEAUTHENTICATE} from '../types'
import {setCookie, removeCookie} from 'helpers/cookiesHelper'

const authenticate = ({email, password}, type) => {
  if(type !== 'signin' && type !== 'signup')
    throw new Error('Wrong API call')

  return (dispatch) => {
    axios.post(`${USER_API_URL}/${type}`, {email, password})
      .then(({data}) => {
        setCookie('token', data.token)
        Router.push('/')
        dispatch({
          type: AUTHENTICATE,
          payload: data.token
        })
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}

const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      payload: token
    })
  }
}

const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token')
    Router.push('/')
    dispatch({type: DEAUTHENTICATE})
  }
}

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
}