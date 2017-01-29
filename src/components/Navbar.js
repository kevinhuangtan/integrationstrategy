import React, { PropTypes, Component } from 'react';
import Styles from '../styles';

class Tab extends Component {
  render(){
    const { label, color, flex, setView, view, activeView} = this.props;
    return (
      <div
        onClick={()=>setView(view)}
        style={{
          ...Styles.flexCol,
          backgroundColor:'white',
          flex:flex,
          cursor:'pointer',
          ...this.props.style
        }}>
        <div style={{
            ...Styles.flexCol,
            height: 50
          }}>
          <span style={{
              fontWeight: activeView == view ? "bold" : "normal",
              margin:20
            }}>{label}</span>
        </div>
        <div style={{
            height:10,
            width:"100%",
            backgroundColor:color
          }}></div>
      </div>
    )
  }
}

export default class Navbar extends Component {
  state = {
  }
  componentDidMount(){
  }
  render(){
    const { setView, activeView } = this.props;

    return(
      <div style={{
          ...Styles.flexRow,
          color: Styles.mainColor,
          position: 'fixed'
        }}>
        <Tab
          activeView={activeView}
          setView={setView}
          view="HOME"
          style={{alignItems : 'flex-start'}}
          label="Entrepreneurship Across Yale"
          flex={5}
          color="#FFE28C"/>
        <Tab
          activeView={activeView}
          setView={setView}
          view="ABOUT"
          label="About"
          flex={1}
          color="#A075EB"/>
        <Tab
          activeView={activeView}
          setView={setView}
          view="RESOURCES"
          label="Resources"
          flex={1} 
          color="#75C2EB"/>
      </div>

    )
  }
}
