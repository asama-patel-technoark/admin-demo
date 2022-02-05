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
      window.location.pathname !== '/signup' &&
      !window.location.pathname.includes('/change-password')
    ) {
      window.location.href = '/login'
    } else if (
      window.location.pathname === '/login' ||
      window.location.pathname.includes('/change-password')
      // ||  window.location.pathname === '/signup'
    ) {
      // config.headers['Authorization'] = localStorage.getItem('authToken');
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

export const toFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

// export const url="http://10.4.22.184:8082/fileAccess/"

export default api
