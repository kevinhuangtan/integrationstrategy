import React, { PropTypes, Component } from 'react';

import HomeView from '../containers/HomeView';
import Navbar from '../containers/Navbar';

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

    }

    return(
      <section>
        <Navbar/>
        {Page}
      </section>

    )
  }
}
