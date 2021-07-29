import React, { Component } from 'react';
import betsy  from './../images/betsy.jpeg';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.getCurrentLocation(),
    }
  }

  getCurrentLocation = () => {
    return window.location.pathname.slice(1);
  }

  headerImage = () => {
    const page = this.state.currentPage;
    switch (page) {
      case ('home'):
        return <img src={betsy} alt=''/>
      case ('about'):
        return <h1>about</h1>
      case ('gallery'):
        return <h1>gallery</h1>
      case ('products'):
        return <h1>products</h1>
      case ('appointment'):
        return <h1>appointment</h1>
      default:
        return <h1>Betsy Sauer</h1>
    }
  }

  componentDidMount() {
    this.headerImage();
  }

  render() {

    return (
      <div>{this.componentDidMount}</div>
    )

  }

}

export default Header;