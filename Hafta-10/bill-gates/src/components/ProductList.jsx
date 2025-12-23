import React from 'react'
import {useSelector} from "react-redux";
import Product from "./Product";


function ProductList() {
  const products = useSelector((state) => state.products.products);


  return (
    <div className='productListWrapper'>
      <div className='productList'>
      {
        products.map((product) => {
          return <Product key={product.product_id} product={product} />
        })
      }
      </div>
    
    </div>
  )
}

export default ProductList