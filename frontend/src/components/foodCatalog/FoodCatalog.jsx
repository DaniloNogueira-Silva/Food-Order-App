import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './foodCatalog.module.css';

const FoodCatalog = () => {

  const [filteredFoods, setFilteredFoods] = useState([])
  const location = useLocation()
  console.log(location.pathname.split('/'))
  const foodEndpoint = location.pathname.split('/')[2]
  const {token} = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async() => {
      const res = await fetch(`http://localhost:4455/product?category=${foodEndpoint}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json()
      console.log(data);

      setFilteredFoods(data);
    }
    fetchFoodType()
  }, [foodEndpoint])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && <h2 className={classes.title}>Melhor {foodEndpoint} na região</h2>}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? filteredFoods.map((f) => (
            <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
              <div className={classes.imgContainer}>
                <img src={`http://localhost:4455/images/${f?.img}`} className={classes.foodImg} />
              </div>
              <div className={classes.foodDetails}>
                <h4 className={classes.foodTitle}>{f?.title}</h4>
                <span className={classes.price}><span>R$</span> {f?.price}</span>
              </div>
            </Link>
          )) : <h1 className={classes.noQuantity}>No {foodEndpoint} Agora mesmo</h1>}
        </div>
      </div>
    </div>
  )
}

export default FoodCatalog
