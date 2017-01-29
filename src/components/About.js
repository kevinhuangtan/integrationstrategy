import React, { PropTypes, Component } from 'react';

import biomed from '../assets/biomed.png'
import brain from '../assets/brain.png'
import brain2 from '../assets/brain2.png'
import cbey from '../assets/cbey.png'
import ceid from '../assets/ceid.png'
import dwight from '../assets/dwight.png'
import Group from '../assets/Group.png'
import innovatehealth from '../assets/innovatehealth.png'
import ocr from '../assets/ocr.png'
import som from '../assets/som.png'

const styles = {
  brain : {
    width: 100,
    margin:20,
    marginLeft:40,
    marginRight:40,
  },
  partnerLogo : {
    width: 200,
    margin: 20,
    marginLeft:40,
    marginRight:40
  }
}

export default class About extends Component {
  state = {
  }

  static propTypes = {
  }

  componentDidMount(){
  }
  render(){
    const {  } = this.props;
    const { } = this.state;

    return(
      <section style={{
          color:'white',
          lineHeight: 2,
          fontSize: 18,
          margin: '0 auto',
          maxWidth: 900,
          paddingBottom: 50
        }}>
        <br/>
        <h2>About</h2>
        <br/>
        <p>
          The Yale Collaborative on Social Entrepreneurship represents the joint <br/>
           efforts of multiple centers on campus dedicated to addressing the world’s<br/>
            biggest problems and to impacting lives for the better.
        </p>
        <img style={styles.brain} src={brain}/>
        <img style={styles.brain} src={brain2}/>
        <br/><br/>
        <p>
          These centers include: The Yale Entrepreneurial Institute,<br/>
          Office of Cooperative Research, School of Management, InnovateHealth Yale,<br/>
           Yale Center for Business and the Environment,<br/>
          Center for Biomedical and Interventional Technology,<br/>
          Dwight Hall and Center for Engineering, Innovation & Design.
        </p>
        <br/>
        <img style={styles.partnerLogo} src={cbey}/>
        <img style={styles.partnerLogo} src={ceid}/>
        <img style={styles.partnerLogo} src={dwight}/>
        <img style={styles.partnerLogo} src={Group}/>
        <img style={styles.partnerLogo} src={innovatehealth}/>
        <img style={styles.partnerLogo} src={ocr}/>
        <img style={styles.partnerLogo} src={som}/>
      </section>

    )
  }
}
