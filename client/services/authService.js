import axios from 'axios'
import {USER_API_URL} from 'config/api.config'

export async function authenticationService({user, type}) {
  return await axios.post(`${USER_API_URL}/${type}`, user)
}