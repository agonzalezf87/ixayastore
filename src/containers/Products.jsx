import { useEffect, useState } from 'react'
import { getProducts } from '../helpers/api'
import { Product } from '../components/Product'

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
      {!!loading && <div>Loading...</div>}
      {!!error && <div>There was an error fetching the data, please </div>}
      {!loading && (
        products.map(product => (
          <Product 
            key={product.id}
            category={product.category}
            title={product.title}
            image={product.image_url}
            short_description={product.short_description}
            description={product.description}
            enabled={product.enabled}
            discount={product.discount}
            price={product.price}
          />
        ))
      )}
    </section>
  )
}

export default Products