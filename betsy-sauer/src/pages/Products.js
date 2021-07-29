import davines from './../images/davines.jpeg';
import bumble from './../images/bumble.jpeg';

function Products() {
  return(
    <div className='container products'>
      <h4>PRODUCTS</h4>
      <hr />
      <h5>DAVINES</h5>
      <img id='davines' src={davines} alt='Davines logo' />
      <h5>BUMBLE AND BUMBLE</h5>
      <img id='bumble' src={bumble} alt='Bumble and Bumble logo' />
    </div>
  )
}

export default Products;