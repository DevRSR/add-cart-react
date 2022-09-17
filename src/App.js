import Nav from './components/Nav/Nav';
import Thumbnail from './components/Thumbnail/Thumbnail';
import About from './components/About/About';
import  './style.css';
import { useState } from 'react'

function App() {
  
 const [count,setCount] = useState(0);
 const [cart,setCart] = useState(0);
  
  function increment () {
    setCount(count + 1)
  }
  function decrement () {
    if(count > 0) {
     setCount(count - 1)
    }
  }
  
  
  return (
    <div className = "container">
     <Nav cart = { cart } setCart = { setCart } setCount = { setCount } />
     <div className = "body">
      <Thumbnail />
      <About count = { count }  increment = { increment } decrement = { decrement } setCart = { setCart }/>
     </div>
    </div>
  );
}

export default App;
