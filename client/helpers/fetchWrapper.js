export const get = (url) => {
  const requestOptions = {
    method: 'GET',
    // headers: authHeader(url)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

export const post = (url, body) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', /*...authHeader(url)*/},
    credentials: 'include',
    body: JSON.stringify(body)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

export const put = (url, body) => {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json', /*...authHeader(url)*/},
    body: JSON.stringify(body)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

export const _delete = (url) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {},//authHeader(url)
  }

  return fetch(url, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)

    if(!response.ok) {
      /*if([401, 403].includes(response.status) && userService.userValue) {
        logout()
      }*/

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)        
    }

    return data
  })
}