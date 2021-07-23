function Navbar(props) {

  return (
    <ul className='navbar'>
      <li><a type='submit' className='navbar-links'onClick={event => props.navigateTo(event, 'home')} href='/'>HOME</a></li>
      <li><a type='submit' className='navbar-links'onClick={event => props.navigateTo(event, 'about')} href='/about'>ABOUT ME</a></li>
      <li><a type='submit' className='navbar-links'onClick={event => props.navigateTo(event, 'gallery')} href='/gallery'>GALLERY</a></li>
      <li><a type='submit' className='navbar-links'onClick={event => props.navigateTo(event, 'products')} href='/products'>PRODUCTS</a></li>
      <li><a type='submit' className='navbar-links'onClick={event => props.navigateTo(event, 'appointment')} href='/appointment'>BOOK AN APPOINTMENT</a></li>
    </ul>
  )
}

export default Navbar;