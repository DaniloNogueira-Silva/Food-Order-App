import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to={'/'} className={classes.title}>
            Tech Pizza
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contato</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Pizzas</a>
            </li>
            <li className={classes.listItem}>
              <a href="#FAQ">FAQ</a>
            </li>
            <li className={classes.listItem}>
              <Link to={'/create'}>Criar</Link>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>0</div>
          </Link>
          <button className={classes.logout}>Sair</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
