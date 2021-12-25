import axios from 'axios'
import cookie from 'js-cookie'
import Router from 'next/router'
import {USER_API_URL} from 'config/api.config'
import {AUTHENTICATE, DEAUTHENTICATE} from '../types'

export const authenticate = (user, type) => {
  console.log({user, type})
  if(type !== 'signup' && type !== 'signin') {
    throw new Error('Invalid type')
  }

  return (dispatch) => {
    axios.post(`${USER_API_URL}/${type}`, user)
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

export const reauthenticate = (token) => 
  (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      payload: token
    })
  }


export const deauthenticate = () => 
  (dispatch) => {
    removeCookie('token')
    Router.push('/')
    dispatch({type: DEAUTHENTICATE})
  }

export function checkServerSideCookie({req, store}) {
  const token = getCookie('token', req)
  if(token)
    store.dispatch(reauthenticate(token))
}

export function setCookie(key, value) {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    })
  }
}

export function getCookie(key, req) {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}

export function removeCookie(key) {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    })
  }
}

export const getCookieFromBrowser = (key) => {
  return cookie.get(key)
}

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined

  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`))
  
  if (!rawCookie) return undefined
  
  return rawCookie.split('=')[1]
}