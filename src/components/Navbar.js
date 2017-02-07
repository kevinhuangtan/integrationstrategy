import React, { PropTypes, Component } from 'react';
import Styles from '../styles';
import logo from '../assets/logo.png'

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
        }}>
        <div style={{
            ...Styles.flexCol,
            // height: 50
          }}>
          <span style={{
              color: activeView == view ? Styles.secondaryColor : "auto",
              margin:20,
              fontSize: 14
            }}>{label}</span>
        </div>

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
          width: 1000,
          margin: '0 auto',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: 'gray'
        }}>
        <img style={{
            width:200,
            margin: 20
          }} src={logo}/>
        <Tab
          activeView={activeView}
          setView={setView}
          view="HOME"
          label="Private Equity"/>
        <Tab
          activeView={activeView}
          setView={setView}
          view="ABOUT"
          label="Energy"/>
        <Tab
          activeView={activeView}
          setView={setView}
          view="RESOURCES"
          label="Environment & Impact" />
        <Tab
          activeView={activeView}
          setView={setView}
          view="RESOURCES"
          label="Client & Industry Experience" />
        <Tab
          activeView={activeView}
          setView={setView}
          view="RESOURCES"
          label="About Us" />
      </div>

    )
  }
}
