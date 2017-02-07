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
        }}>
        <div style={{
            ...Styles.flexCol,
            height: 50
          }}>
          <span style={{
              fontWeight: activeView == view ? "bold" : "normal",
              margin:20,
              fontSize: 18
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
          position: 'fixed',
          width: "100%",
          zIndex: 1000,
          top: 0
        }}>
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
