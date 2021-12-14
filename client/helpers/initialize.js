import Router from 'next/router'
import actions from 'redux/actions/index'
import {getCookie} from './cookiesHelper'

export default function(context) {
  if(context.isServer) {
    if(context.req.headers.cookie)
      context.store.dispatch(actions.reauthenticate(getCookie('token', context.req)))
  } else {
    const token = context.store.getState().authentication.token

    if(token && (context.pathname === '/auth/signin' || context.pathname === '/auth/signup'))
      setTimeout(() => Router.push('/'), 0)
  }
}