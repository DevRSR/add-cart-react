import product1 from '.././images/image-product-1-thumbnail.jpg';
import forward from '.././images/icon-next.svg';
import backward from '.././images/icon-previous.svg';
import product2 from '.././images/image-product-2-thumbnail.jpg';
import product3 from '.././images/image-product-3-thumbnail.jpg';
import product4 from '.././images/image-product-4-thumbnail.jpg';
import './style.css'

const Thumnail = () => {
  return (
    <div className = "container">
     <div className = 'Thumnail'>
      <img src={ product1 } alt='' className = "product" />
      <img src={ backward } alt='' className = "backward" />
      <img src={ forward } alt=''  className = "forward" />
     </div>
     <div className = 'photos'>
      <img src= { product1 } alt='' />
      <img src= { product2 } alt='' />
      <img src= { product3 } alt='' />
      <img src= { product4 } alt='' />
     </div>
    </div>
    )
}

export default Thumnail;