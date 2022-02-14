import cookie from 'js-cookie'
import Router from 'next/router'
import { AUTHENTICATE, DEAUTHENTICATE } from '../types'
import { authenticationService } from 'services/authService'

export const authenticate = ({ user, type }) => {
  if (type !== 'signup' && type !== 'signin') {
    throw new Error('Invalid type')
  }

  return async (dispatch) => {
    const { data: { token } } = await authenticationService({ user, type })
    setCookie('token', token)
    Router.push('/')
    dispatch({
      type: AUTHENTICATE,
      payload: token
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
    dispatch({ type: DEAUTHENTICATE })
  }

export function checkServerSideCookie ({ req, store }) {
  const token = getCookie('token', req)
  if (token) {
    store.dispatch(reauthenticate(token))
  }
}

export function setCookie (key, value) {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    })
  }
}

export function getCookie (key, req) {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
}

export function removeCookie (key) {
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
  if (!req.headers.cookie) {
    return undefined
  }

  const rawCookie = req.headers.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith(`${key}=`))

  if (!rawCookie) {
    return undefined
  }

  return rawCookie.split('=')[1]
}
