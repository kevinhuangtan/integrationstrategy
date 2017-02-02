import React, { PropTypes, Component } from 'react';

import Resources from '../components/Resources';
import home from '../assets/home.png'
import lightbulb from '../assets/lightbulb.png'
import triangle from '../assets/triangle.png'
import Styles from '../styles'

export default class Home extends Component {
  state = {
  }

  static propTypes = {
  }

  componentDidMount(){
  }
  render(){
    const { setView } = this.props;

    return(
      <section >
        <div
          className="background"
          style={{
            width: "100%",
            height: 400,
          }}>
          <iframe
            style={{
              borderWidth: 0,
              height:"100%"
            }}
            width="100%"
            height="auto"
            scrolling="no"
            src="https://www.youtube.com/embed/IeNeY0QLTyg?autoplay=1&showinfo=0&controls=0"
            frameborder="0" allowfullscreen>
          </iframe>
        </div>
        <div style={{
            ...Styles.flexRow,
            color: 'white',
            position:'absolute',
            bottom:0,
            left:0,
            width:"100%",
            height:300,
            backgroundColor:Styles.mainColor,
            alignItems:'flex-start',
            paddingTop: 20
          }}>
          <img src={lightbulb} style={{ width: 140, textAlign : 'left'}}/>
          <div
            className="hover-background"
            onClick={()=>setView("RESOURCES")}
            style={{
              ...Styles.flexRow,
              margin: 50,
              backgroundColor:'white',
              color:Styles.mainColor,
              borderRadius:30,
              padding:10,
              paddingLeft: 30,
              paddingRight: 30,
              cursor:'pointer'
            }}>
            <h4>Discover Entrepreneurship Resouces</h4>
            <img style={{margin: 15, width: 10}} src={triangle}/>
          </div>
          </div>
      </section>

    )
  }
}
