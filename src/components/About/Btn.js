import cart from '.././images/icon-cart.svg';
import plus from '.././images/icon-plus.svg';
import minus from '.././images/icon-minus.svg';



const Btn = ( { count, increment, decrement, setCart } ) => {
  
  function addCart () {
    setCart(count)
  }
   
  return (
     <div className = "box">
      <div className = "num-btn">
       <img onClick = { decrement } src= { minus } alt=""/>
       <p>{count}</p>
       <img onClick = { increment } src= { plus } alt=""/>
      </div>
      <div onClick = { addCart } className = "cart-btn">
       <img src= { cart } alt=""/>
       <p>Add to Cart</p>
      </div>
     </div>
    )
}

export default Btn;