import axios from 'axios'

const api = axios.create({
  baseURL: 'https://idg-plumbing.herokuapp.com/v1',
})

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (
      !localStorage.getItem('authToken') &&
      localStorage.getItem('authToken') === null &&
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/signup'
    ) {
      window.location.href = '/login'
    } else if (
      window.location.pathname === '/login'
      // ||  window.location.pathname === '/signup'
    ) {
      // config.headers['Authorization'] = localStorage.getItem('authToken')
    } else {
      config.headers['Authorization'] = localStorage.getItem('authToken')
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status == 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

export const toFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

export default api
