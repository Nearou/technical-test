import {API_URL} from '../config'

/**
 * @param {string} url
 * @param {object} options
 */
export async function apiFetch (endpoint : string, options: any) {
  const response = await fetch(API_URL + endpoint, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    ...options
  })
  if (response.status === 204) {
    return null
  }
  const responseData = await response.json()
  if (response.ok) {
    return responseData
  } else {
    throw responseData
  }
}
