import { useEffect, useState } from 'react'
import { getProducts } from '../helpers/api'
import { Product } from '../components/Product'
import '../styles/containers/Products.sass'

const Products = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const apiProducts = await getProducts()
      if (!apiProducts.error) {
        setLoading(false)
        setProducts(apiProducts)
      } else {
        setLoading(false)
        setError(true)
        setProducts(apiProducts)
      }
    })()
  },[])

  return (
    <section className="Products">
      {!!loading && <div>Cargando...</div>}
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