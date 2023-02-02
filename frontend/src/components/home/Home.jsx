import React from "react";
import Hero from "../hero/Hero";
import classes from "./home.module.css";
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg';
import illustration2 from '../../assets/delivery-location.svg';
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
import Newsletter from "../newsletter/Newsletter";
import Foods from "../foods/Foods";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>delivery</span>
            <h2 className={classes.deliveryTitle}>Sempre pronto para você</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg} />
              <h3>Nossos entregadores sempre estão prontos</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg} />
              <h3>Eles são rápidos</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg} />
              <h3>E sua comida não esfria</h3>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
