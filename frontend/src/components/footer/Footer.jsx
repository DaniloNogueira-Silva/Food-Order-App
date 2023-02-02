import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Aberto nos dias</h2>
          <ul className={classes.list}>
            <li>Segunda - Sexta</li>
            <li className={classes.workingTime}>08:00 - 22:00</li>
            <li>Sábado</li>
            <li className={classes.workingTime}>08:00 - 20:00</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Newsletter</h2>
          <ul className={classes.list}>
            <li>Se inscreva em nosso newsletter</li>
            <li>Receba as ultimas novidades</li>
            <li>Receba o menu com promoções</li>
            <li>Toda semana!</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Social Media</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
        <div className={classes.attribution}>
        <h3>Agradeçimento especial ao IconScout pelas ilustrações: </h3>
        <div style={{marginLeft: '6px'}}>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/man" target="_blank">Man having his meal Illustration</a> by <a href="https://iconscout.com/contributors/iconscout">IconScout Store</a> on <a href="https://iconscout.com">IconScout</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/male" target="_blank">Male delivery guy riding scooter Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/iconscout" target="_blank">IconScout Store</a> </div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/delivery-location" target="_blank">Delivery Location Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/tdaystudio" target="_blank">Tdays Tudio</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/deliveryman-with-pizza" target="_blank">Deliveryman with pizza Illustration</a> by <a href="https://iconscout.com/contributors/tranto">Lord Anon</a> on <a href="https://iconscout.com">IconScout</a></div>
        <div><a rel="noreferrer" href="https://iconscout.com/illustrations/get-newsletter-updates" target="_blank">Get newsletter updates Illustration</a> by <a rel="noreferrer" href="https://iconscout.com/contributors/Aleshaku" target="_blank">Ilusiku Studio</a></div>
        </div>
       </div>
    </section>
  )
}

export default Footer