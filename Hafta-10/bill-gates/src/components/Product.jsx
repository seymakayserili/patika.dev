import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {buy,sell} from "../redux/Products/productsSlice"

// key={product.product_id} id={product.product_id} name={product.product_name} amount={product.amount} price={product.product_price} imgLink={product.img}
// {name,price,amount,imgLink}
function Product({product}) {

  const balance = useSelector((state) => state.products.balance)
  const dispatch = useDispatch();

  return (
    <div className='product'>
          <img src={product.img} alt={product.product_name} />
          <div className='name'>{product.product_name}</div>
          <div className='cost'>${product.product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div className="controller">
            <button className={product.amount == 0 ? 'sell disable' : "sell"} onClick={() => dispatch(sell(product.product_id))} disabled={product.amount == 0}>Sell</button>
            <input type="number" className='input' value={product.amount} readOnly/>
            <button className={product.product_price > balance ? 'buy disable' : "buy"} onClick={()=> dispatch(buy(product.product_id)) } disabled={balance < product.product_price}>Buy</button>
          </div>
    </div>
  )
}

export default Product