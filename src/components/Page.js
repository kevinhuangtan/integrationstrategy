import React, { PropTypes, Component } from 'react';

import firebase from 'firebase';
import Styles from '../styles';
var MobileDetect = require('mobile-detect');
var mobile = new MobileDetect(window.navigator.userAgent).mobile();
import Data from '../data'

import path from '../assets/path.png'
import path_start from '../assets/path_start.png'
import path_end from '../assets/path_end.png'

import check from '../pieces/check.png'

const pieceWidth = 150;
const cutWidth = pieceWidth/5;
const offset = 40;
const verticalSpace = 50;

const posCenter = {
  margin: '0 auto',
  left:0,
  right:0,
  position: 'absolute'
}

const puzzleMap = {
  tl: {
    type: "iam",
    value: 'faculty',
    name: 'Faculty',
    divStyle: {
      left: 0,
      top : 0,
      transform: `translateX(-${offset}px)`
    }
  },
  tm: {
    type: "iam",
    value: 'grad_student',
    name: 'Grad Student',
    divStyle: {
      left: pieceWidth,
      top : 0
    }
  },
  tr: {
    type: "iam",
    value: 'undergrad',
    name: 'Undergrad',
    divStyle: {
      left: 2 * pieceWidth ,
      top : 0,
      transform: `translateX(${offset}px)`
    },
  },
  ml: {
    type: "iwant",
    value: 'learn',
    name: 'Learn',
    divStyle: {
      left: 0,
      top : pieceWidth,
      transform: `translateX(-${offset}px) translateY(${verticalSpace + offset}px)`
    },
  },
  mm: {
    type: "iwant",
    value: 'get_started',
    name: 'Get Started',
    divStyle: {
      left: pieceWidth,
      top : pieceWidth,
      transform: `translateY(${verticalSpace + offset}px)`
    },
  },
  mr: {
    type: "iwant",
    value: 'join_a_community',
    name: 'Join a Community',
    divStyle: {
      left: 2 * pieceWidth,
      top : pieceWidth,
      transform: `translateX(${offset}px) translateY(${verticalSpace + offset}px)`
    },
  },
  bl: {
    type: "iwant",
    value: 'find_funding',
    name: 'Find Funding',
    divStyle: {
      left: 0,
      top : 2 * pieceWidth,
      transform: `translateX(-${offset}px) translateY(${verticalSpace + offset*2}px)`
    },
  },
  bm: {
    type: "iwant",
    value: 'get_advice',
    name: 'Get Advice',
    divStyle: {
      left: pieceWidth,
      top : 2 * pieceWidth,
      transform: `translateY(${verticalSpace + offset * 2}px)`
    },
  },
  br: {
    type: "iwant",
    value: 'share_expertise',
    name: 'Share Expertise',
    divStyle: {
      left: 2 * pieceWidth,
      top : 2 * pieceWidth,
      transform: `translateX(${offset}px) translateY(${verticalSpace + offset*2}px)`
    },
  },
}

class Subsection extends Component {
  state = {
    expand: false
  }
  _rows = () => {
    const { subheader, links, header, contentColor } = this.props;
    const { expand } = this.state;
    if(!expand){
      return null
    }
    return (
      <div style={{textAlign:"left", width: "100%", paddingLeft: 30}}>
        {links[header][subheader].map((link, k) => {
          return (
              <p key={k}>
                <a
                  className="hover-underline"
                   style={{
                    color: contentColor,
                  }}
                  href={link.href} target="_blank">
                  {link.name}
                </a>
              </p>
          )
        })}
      </div>
    )
  }
  render(){
    const { subheader } = this.props;
    if(this.state.expand){
      return (
        <section
          onClick={()=>this.setState({
            expand: !this.state.expand
          })}
          style={{
            border:"1px solid white",
            borderWidth:0,
            borderBottomWidth:1,
            cursor: "pointer",
            margin: 5,
            padding: 5
          }}>
          <p style={{cursor: "pointer"}}>
            {subheader}
            <span style={{float:"right"}}></span>
          </p>
          {this._rows()}
        </section>
      )
    }
    return (
      <section
        onClick={()=>this.setState({
          expand: !this.state.expand
        })}
        style={{
          border:"1px solid white",
          borderWidth:0,
          borderBottomWidth:1,
          cursor: "pointer"
        }}
        className="hover-expand">
        <p style={{cursor: "pointer"}}>
          {subheader}
          <span style={{float:"right"}}></span>
        </p>
        {this._rows()}
      </section>
    )
  }
}

class Section extends Component {
  state = {
    expand: false
  }
  _rows = () => {
    const{ header, links, index } = this.props;
    let contentColor = (index%colors.length == 2) ? Styles.mainColor : "white";

    return (
      <div style={{
          textAlign:"left",
          width: 300,
          margin: "0 auto"
        }}>
        {Object.keys(links[header]).map((help_me,j) => {
          if(links[header][help_me].length == 0){return null}
          return (
            <Subsection
              links={links}
              header={header}
              subheader={help_me}
              contentColor={contentColor}
              key={j}/>
          )
        })}
      </div>
    )
  }
  render(){
    const{ header, links, index } = this.props;
    let contentColor = (index%colors.length == 2) ? Styles.mainColor : "white";
    return (
      <section
        style={{
          backgroundColor: colors[index%colors.length],
          padding: 20,
          marginTop: 20,
          marginBottom: 20,
          color: contentColor
        }}>
        <br/>
        <h4 style={{textAlign:'center'}}>{header}</h4>
        {this._rows()}
      </section>
    )
  }
}

class Piece extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    offsetX : 0,
    offsetY : 0,
    selected: false
  }
  handleClick = () => {
    this.props.handleClick(this.props.piece)
  }
  _active = () => {
    const { piece, submit, iam, iwant } = this.props;

    let active = false;
    if(piece.type == "iam"){ // exclusive
      if(iam == piece.name){ active = true}
    }
    else{
      if(iwant.indexOf(piece.name) != -1){active = true}
    }
    return active
  }
  _content = () => {
    const { piece, submit, iam, iwant } = this.props;
    let active = this._active()

    if(submit){
      if(piece.type == "iam"){
        return (
          <img style={{maxHeight:pieceWidth}} src={path_start}/>
        )
      }
      if(iwant.indexOf(piece.name) == (iwant.length - 1)){
        return (
          <img style={{maxHeight:pieceWidth}} src={path_end}/>
        )
      }

      return (
        <img style={{maxHeight:pieceWidth}} src={path}/>
      )
    }
    return (
      <h4 style={{
          textAlign: 'center',
        }}>{piece.name}</h4>

    )
  }
  _translate = () => {
    const { piece, submit, iam, iwant } = this.props;

    let ret = {}
    if(piece.type == "iam"){ // exclusive
      return {
        transform: 'translateX(0) translateY(0)',
        top: 0,
        left: pieceWidth
      }
    }
    return {
      transform: 'translateX(0) translateY(0)',
      top: pieceWidth * iwant.indexOf(piece.name) + pieceWidth,
      left: pieceWidth
    }
    return ret
  }
  render() {
    const { piece, submit, iam, iwant } = this.props;

    let translate = {};
    if(submit){
      translate = this._translate()
    }
    var active = this._active();

    if(submit && !active){ return null }

    return (
      <div
        className="transition"
        onClick={this.handleClick}
         style={{
           position: 'absolute',
           width: pieceWidth ,
           height: pieceWidth ,
           display: 'flex',
           justifyContent:'center',
           alignItems: 'center',
           cursor: 'pointer',
          ...piece.divStyle,
          ...translate,
          height: pieceWidth,
          width: pieceWidth,
          backgroundColor: active ? Styles.darkBlue : 'white' ,
          color: active ? "white" :  Styles.mainColor
        }}>

        {this._content()}
      </div>
    );
  }
}

let colors = [
  "#EB8275",
  "#3752B2",
  "#FFE28C"
]


export default class Page extends Component {
  state = {
    submit : false, // user submitted form
    activeIam: "",
    activeIwant: []
  }

  static propTypes = {
  }

  componentDidMount(){
    var self = this;
    // retrieve user's bag from previous session
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      }
    });
  }
  handleClickCheck = () => {
    this.setState({
      submit : true
    });
  }
  handleClickPiece = (piece) => {
    if(this.state.submit){
      return
    }
    if(piece.type == "iam"){
      if(this.state.activeIam == piece.name){
        this.setState({
          activeIam : ""
        });
      }
      else{
        this.setState({
          activeIam : piece.name
        });
      }
    }
    else{
      let iwant = Object.assign([],this.state.activeIwant);
      if(iwant.indexOf(piece.name) == -1){
        iwant.push(piece.name)
      }
      else{
        iwant.splice(iwant.indexOf(piece.name), 1)
      }
      this.setState({
        activeIwant :  iwant
      });
    }
  }
  _filterLinks = (activeIam, activeIwant) => {
    let ret = {};
    activeIwant.map((a, i)=>{
      ret[a] = {};
    });
    console.log(activeIam)
    Data.data['student'].map((d, i) => {
      if(activeIwant.indexOf(d.category)!=-1){
        if(!ret[d.category][d.help_me]){
          ret[d.category][d.help_me] = []
        }
        let correctIam = false;
        if(activeIam == "Grad Student" && d.grad){
          correctIam = true
        }
        if(activeIam == "Undergrad" && d.undergrad){
          correctIam = true
        }
        if(correctIam){
          ret[d.category][d.help_me].push(d)

        }

      }
    })
    return ret
  }
  _pieces = () => {
    const { submit, activeIam, activeIwant } = this.state;

    return (
      <section>
        <br/>
        <h4 style={{
            display: submit ? "none" : "block",
          }}>I am</h4>
        <br/>
        <h4
          style={{
            display: submit ? "none" : "block",
            ...posCenter,
            top: 2 * pieceWidth + verticalSpace + 30
          }}>and I want to</h4>
        <div style={{
            position: 'relative',
            color: Styles.mainColor,
            height: (activeIwant.length + 1) * pieceWidth ,
            zIndex: 100
          }}>
          {Object.keys(puzzleMap).map((piece, i) => {
            return(
              <Piece
                handleClick={this.handleClickPiece}
                key={i}
                iam={activeIam}
                iwant={activeIwant}
                submit={submit}
                piece={puzzleMap[piece]}/>
            )
          })}
        </div>
      </section>
    )
  }
  _links = () => {
    const { submit, activeIam, activeIwant } = this.state;

    let links = this._filterLinks(activeIam, activeIwant)

    return (
      <div
         className="transition-links"
         style={{
          opacity: submit ? 1 : 0,
          transform: submit ? 'translateY(0)' : 'translateY(-30px)',
          color: "white",
          marginTop: 25,
          zIndex: '-100',
          textAlign: 'left',
        }}>
        {Object.keys(links).map((header,i) => {
          return (
            <Section
              key={i}
              index={i}
              links={links}
              header={header}/>
          )
        })}
      </div>

    )
  }
  _greenCheck = () => {
    return (
      <div
        onClick={this.handleClickCheck}
        style={{
          backgroundColor: '#75EBBB',
          borderRadius: 50,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          ...posCenter,
          top: 3 * pieceWidth + verticalSpace + 300,
          cursor: 'pointer',
          display: this.state.submit ? "none" : "flex",
          zIndex: 200
        }}>
        <img style={{width: 25}} src={check}/>
      </div>
    )
  }
  render(){
    const {  } = this.props;
    const { submit, activeIam, activeIwant } = this.state;

    return(
      <div style={{
          ...posCenter,
          color: 'white',
          marginBottom: 200
        }}>
        <br/><br/>
        <h3>Resources</h3>
        <div style={{width: pieceWidth*3, margin: "0 auto"}}>
          {this._pieces()}
        </div>
        <div style={{
            width:"70%",
            maxWidth: 800,
            minWidth: 400,
            margin: "0 auto"
          }}>
          {this._links()}
        </div>
        {this._greenCheck()}

      </div>

    )
  }
}
