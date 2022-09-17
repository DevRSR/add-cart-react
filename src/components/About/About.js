import Btn from './Btn';
import './style.css'

const About = ( { count, increment, decrement, setCart } ) => {
  return (
     <div className = "div">
      <p className = "header p">Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className = "p">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className = "width">
       <div className = "discount-price">
        <h3>$125.00</h3>
        <p>50%</p>
       </div>
       <p className = "old-price">$250.00</p>
      </div>
      <Btn count = { count }  increment = { increment } decrement = { decrement } setCart = { setCart } />
     </div>
    )
}

export default About;