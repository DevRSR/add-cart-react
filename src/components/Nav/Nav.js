import cartImg from '.././images/icon-cart.svg';
import product1 from '.././images/image-product-1-thumbnail.jpg';
import logo from '.././images/logo.svg';
import menu from '.././images/icon-menu.svg';
import close from '.././images/icon-close.svg';
import del from '.././images/icon-delete.svg';
import avatar from '.././images/image-avatar.png';
import  './style.css';


const Nav = ( { cart,setCart, setCount } ) => {
  
  
   function showMenu () {
     const menu = document.querySelector('.menu-list');
     menu.classList.add('block-sm')
   }
   function hideMenu () {
     const menu = document.querySelector('.menu-list');
     menu.classList.remove('block-sm');
   }
   function toggleCart () {
     const cart = document.querySelector('.payment')
     cart.classList.toggle('block-sm')
     cart.classList.toggle('block-lg')
   }
   function deleteCart () {
     setCart(0);
     setCount(0)
   }
   
  
  return (
    <div className = "Nav">
     <div className = 'menu-list'>
      <img onClick = { hideMenu } className = 'close' src={ close } alt='hamburger'/>
      <div className = 'list'>
       <p><a href="/">Collections</a></p>
       <p><a href="/">Men</a></p>
       <p><a href="/">Women</a></p>
       <p><a href="/">About</a></p>
       <p><a href="/">Contact</a></p>
      </div>
     </div>
     <div className = "logo">
      <img onClick = { showMenu } className = 'menu' src={ menu } alt='hamburger'/>
      <img src={ logo } alt='logo'/>
      <div>
       <p><a href="/">Collections</a></p>
       <p><a href="/">Men</a></p>
       <p><a href="/">Women</a></p>
       <p><a href="/">About</a></p>
       <p><a href="/">Contact</a></p>
      </div>
     </div>
     <div className = "cart">
      <div className = 'cart-div'>
       <img onClick = { toggleCart } src={ cartImg } alt='cart'/>
       { cart > 0 && <p className = 'count' > { cart }</p> }
      </div>
      <div className = "avatar">
       <img src={ avatar } alt='avatar'/>
      </div>
      <div className = "payment">
       <h4>Carts</h4>
        { cart === 0 && <div className = 'empty'>
         <p>Your cart is empty</p>
        </div> }
       { cart > 0 && <div>
       <div className = 'section'>
        <img src={ product1 } alt='avatar'/>
        <div className = 'total'>
         <p>Autumn limited Edition...</p>
         <p>$<span>125.00</span> x <span>{ cart }</span>  <span>${125 * cart }.00</span>
         </p>
        </div>
        <img onClick = { deleteCart } src={ del } alt='avatar'/>
       </div>
       <div onClick = { deleteCart } className = 'Checkout'>Checkout</div> 
      </div>
       }
      </div>
     </div>
    </div>
    )
}

export default Nav;