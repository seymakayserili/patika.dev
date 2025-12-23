import React from 'react';
import {useSelector} from "react-redux";
  
function Balance() {
  const balance  = useSelector((state) => state.products.balance);
  return (
    <div className='balanceWrapper'>
       <div className='balance'>${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
    </div>
  )
}

export default Balance