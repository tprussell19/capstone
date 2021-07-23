function Navbar(props) {
  const navbarStyles = {
    display: 'flex',
    flexDirection: 'row',
    background: 'black',
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'none'
  }

  return (
    <div style={navbarStyles}>
      <a type='submit' onClick={event => props.navigateTo(event, 'home')} href='/'>HOME</a>
      <a type='submit' onClick={event => props.navigateTo(event, 'about')} href='/about'>ABOUT ME</a>
      <a type='submit' onClick={event => props.navigateTo(event, 'gallery')} href='/gallery'>GALLERY</a>
      <a type='submit' onClick={event => props.navigateTo(event, 'products')} href='/products'>PRODUCTS</a>
      <a type='submit' onClick={event => props.navigateTo(event, 'appointment')} href='/appointment'>BOOK AN APPOINTMENT</a>
    </div>
  )
}

export default Navbar;