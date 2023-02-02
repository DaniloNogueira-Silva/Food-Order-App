import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Quer comer algo delicioso</h2>
          <p className={classes.firstMsg}>Mas ir buscar uma comida <span>demora demais...</span></p>
          <p className={classes.secondMsg}>
            Porquê não pedir uma <span>pizza</span> ou outra comida <br /> <span>deliciosa </span>
            direto do nosso restaurante
          </p>
          <p className={classes.desc}>
            Sempre estamos a disposição do nosso cliente.
            Vocês são o foco do nosso negócio.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Compre agora!</button>
            <button className={classes.buttonSee}><a href="#foods">Veja o que temos disponível <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero