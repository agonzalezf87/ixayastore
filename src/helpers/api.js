import axios from 'axios'

const API = import.meta.env.VITE_API
const KEY = import.meta.env.VITE_API_KEY

const apiInstnace = axios.create({
  baseURL: API,
  headers: {
    "X-API-KEY": KEY
  }
})

const getProducts = async () => {
  try {
    const response = await apiInstnace.get('products')
    if(response.status === 200) {
      return response.data.response
    } else {
      return {
        status: response.status,
        message: response.statusText
      }
    }
  } catch (error) {
    return {
      error: error
    }
  }
}

export { getProducts }