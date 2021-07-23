import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Appointment from '../pages/Appointment';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Products from '../pages/Products';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.getCurrentLocation()
    }
  }

  getCurrentLocation = () => {
    return window.location.pathname.slice(1);
  }

  navigateTo = (event, location) => {
    event.preventDefault();
    this.setState({currentPage: location});
    window.history.replaceState({}, 'Betsy Sauer', location);
  }

  render() {
    console.log('Page: ', (this.state));

    return (
      <div>
        <Navbar navigateTo={this.navigateTo} />
        { this.state.currentPage === 'about' ? <About /> : null }
        { this.state.currentPage === 'appointment' ? <Appointment /> : null }
        { this.state.currentPage === 'gallery' ? <Gallery /> : null }
        { this.state.currentPage === 'products' ? <Products /> : null }
        { ['about', 'appointment', 'gallery', 'products'].includes(this.state.currentPage) ? null : <Home /> }
      </div>
    )
  }

}

export default Content;