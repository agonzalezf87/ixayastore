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
        error: response.statusText
      }
    }
  } catch (error) {
    return {
      error: error
    }
  }
}

const getOrdersList = async () => {
  try {
    const response = await apiInstnace.get('orders')
    if(response.status === 200) {
      return response.data.response
    } else {
      return {
        error: response.statusText
      }
    }
  } catch (error) {
    return {
      error: error
    }
  }
}

const placeOrder = async (order) => {
  try {
    const response = await apiInstnace.post('orders/create', {
      ...order,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    if(response.status === 200) {
      return {
        response: response.data.response,
        order_id: response.data.order_id
      } 
    } else {
      return {
        error: response.statusText
      }
    }
  } catch (error) {
    return {
      error: error
    }
  }
}

export { getProducts, getOrdersList, placeOrder }