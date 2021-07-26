import React from "react";

function Navbar(props) {

  return (
    <React.Fragment>
      <ul className='navbar'>
        <li className='navbar-items' ><a type='submit' className='navbar-links' onClick={event => props.navigateTo(event, 'home')} href='/'>HOME</a></li>
        <li className='navbar-items' ><a type='submit' className='navbar-links' onClick={event => props.navigateTo(event, 'about')} href='/about'>ABOUT ME</a></li>
        <li className='navbar-items' ><a type='submit' className='navbar-links' onClick={event => props.navigateTo(event, 'gallery')} href='/gallery'>GALLERY</a></li>
        <li className='navbar-items' ><a type='submit' className='navbar-links' onClick={event => props.navigateTo(event, 'products')} href='/products'>PRODUCTS</a></li>
        <li className='navbar-items' ><a type='submit' className='navbar-links' onClick={event => props.navigateTo(event, 'appointment')} href='/appointment'>BOOK AN APPOINTMENT</a></li>
      </ul>
    </React.Fragment>
  )
}


export default Navbar;