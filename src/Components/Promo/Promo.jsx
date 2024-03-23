import React from 'react'
import './Promo.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'



const Promo = () => {
 
  return (
    <div className='promo'>
        <div className="promo-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name}
                 image={item.image}
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                  description={item.description}></Item>
            })}
             
        </div>

    </div>
  )
}

export default Promo