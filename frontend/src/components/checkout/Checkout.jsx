import React from 'react'
import { useSelector } from 'react-redux'
import classes from './checkout.module.css'

const Checkout = () => {
  const {products} = useSelector((state) => state.cart)

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Pedido feito com sucesso</h2>
        <p>Será entregue dentro de 1 hora</p>
        <span>Preço total: R${totalPrice}</span>
      </div>
    </div>
  )
}

export default Checkout
