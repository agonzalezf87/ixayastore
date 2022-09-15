import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { getProducts } from '../helpers/api'
import { Product } from '../components/Product'
import '../styles/containers/Products.sass'

const Products = () => {
  const {loading, toggleLoading} = useContext(CartContext)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const apiProducts = await getProducts()
      if (!apiProducts.error) {
        toggleLoading(false)
        setProducts(apiProducts)
      } else {
        toggleLoading(false)
        setError(true)
        setProducts(apiProducts)
      }
    })()
  },[])

  return (
    <section className="Products">
      {!!error && <div>Ha habido un error: error.error</div>}
      {!loading && (
        products.map(product => (
          <Product 
            key={product.id}
            data={product}
          />
        ))
      )}
    </section>
  )
}

export { Products }