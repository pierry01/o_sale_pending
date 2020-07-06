import React from 'react'

import Product from '../components/products/Product'

const ProductList = () => {
  const products = ['Product 1', 'Product 2', 'Product 3']
  const productList = products.map(product => <Product key={product} />)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-2">
          <div className="row">
            <div className="card-deck">
              { productList }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList