import React from 'react'
import {useSelector} from "react-redux";

function Basket() {
  const basket = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const balance = useSelector((state) => state.products.balance)
  return (
    <div className={balance == 100000000000 ? "none" : "basketWrapper"}>
      <div className='basketHeader'>Your Receipt</div>
      {basket.map((element, index) => {
          return <div key={index} className={element.amount != 0 ? "basketElement" : "none"} >
          <div className='basketElementName'> {element.product_name}</div>
          <div className='basketElementAmount'> x{element.amount} </div>  
          <div className='basketElementCost'>{element.product_price * element.amount}</div>
          </div>
      })}
      <div className='basketTotal'>
        <span>Total Price  </span> 
        <div className='basketTotalPrice'>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
      </div>
    </div>
  )
}

export default Basket