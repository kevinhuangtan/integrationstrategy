import React, { PropTypes, Component } from 'react';

import Resources from '../components/Resources';
import HomeView from '../containers/HomeView';
import Navbar from '../containers/Navbar';
import About from '../components/About';

export default class Home extends Component {
  state = {
  }


  componentDidMount(){
  }
  render(){
    const { view } = this.props;

    let Page;
    switch (view) {
      case "HOME":
        Page = <HomeView/>
        break
      case "ABOUT":
        Page = <About/>
        break
      case "RESOURCES":
        Page = <Resources/>
        break

    }

    return(
      <section>
        <Navbar/>
        {Page}
      </section>

    )
  }
}
