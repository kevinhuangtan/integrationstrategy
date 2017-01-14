import React, { PropTypes, Component } from 'react';

import firebase from 'firebase';
import Styles from '../styles';
var MobileDetect = require('mobile-detect');
var mobile = new MobileDetect(window.navigator.userAgent).mobile();
import Data from '../data'
import tl from '../pieces/tl.svg';
import tm from '../pieces/tm.svg';
import tr from '../pieces/tr.svg';
import ml from '../pieces/ml.svg';
import mm from '../pieces/mm.svg';
import mr from '../pieces/mr.svg';
import bl from '../pieces/bl.svg';
import bm from '../pieces/bm.svg';
import br from '../pieces/br.svg';

import tl_w from '../pieces/tl_w.svg';
import tm_w from '../pieces/tm_w.svg';
import tr_w from '../pieces/tr_w.svg';
import ml_w from '../pieces/ml_w.svg';
import mm_w from '../pieces/mm_w.svg';
import mr_w from '../pieces/mr_w.svg';
import bl_w from '../pieces/bl_w.svg';
import bm_w from '../pieces/bm_w.svg';
import br_w from '../pieces/br_w.svg';

import check from '../pieces/check.png'

const pieceWidth = 150;
const cutWidth = pieceWidth/5;
const offset = 50;
const verticalSpace = 80;

const posCenter = {
  margin: '0 auto',
  left:0,
  right:0,
  position: 'absolute'
}

const puzzleMap = {
  tl: {
    type: "iam",
    src : tl,
    src_w: tl_w,
    value: 'faculty',
    name: 'Faculty',
    white: true,
    divStyle: {
      left: 0,
      top : 0,
      transform: `translateX(-${offset}px)`
    },
    style : {
      width: pieceWidth + cutWidth,
      height: pieceWidth,
      left:0,
    }
  },
  tm: {
    type: "iam",
    src : tm,
    src_w: tm_w,
    value: 'grad_student',
    name: 'Grad Student',
    divStyle: {
      left: pieceWidth ,
      top : 0,
    },
    style : {
      width: pieceWidth,
      height: pieceWidth + cutWidth,
      left:0,
      top: 0
    }
  },
  tr: {
    type: "iam",
    src : tr,
    src_w: tr_w,
    value: 'undergrad',
    name: 'Undergrad',
    white: true,

    divStyle: {
      left: 2 * pieceWidth ,
      top : 0,
      transform: `translateX(${offset}px)`
    },
    style : {
      width: pieceWidth + cutWidth,
      height: pieceWidth + cutWidth,
      right:0,
      top: 0
    }
  },
  ml: {
    type: "iwant",
    src : ml,
    src_w: ml_w,
    value: 'learn',
    name: 'Learn',
    divStyle: {
      left: 0,
      top : pieceWidth,
      transform: `translateX(-${offset}px) translateY(${verticalSpace + offset}px)`
    },
    style : {
      width: pieceWidth,
      height: pieceWidth + cutWidth,
      bottom:0,
      left: 0,
    }
  },
  mm: {
    type: "iwant",
    src : mm,
    src_w: mm_w,
    value: 'get_started',
    white: true,

    name: 'Get Started',
    divStyle: {
      left: pieceWidth,
      top : pieceWidth,
      transform: `translateY(${verticalSpace + offset}px)`

    },
    style : {
      width: pieceWidth + 2 * cutWidth,
      height: pieceWidth,
      top: 0,
      left: -cutWidth
    }
  },
  mr: {
    type: "iwant",
    src : mr,
    src_w: mr_w,
    value: 'join_a_community',
    name: 'Join a Community',
    divStyle: {
      left: 2 * pieceWidth,
      top : pieceWidth,
      transform: `translateX(${offset}px) translateY(${verticalSpace + offset}px)`
    },
    style : {
      width: pieceWidth ,
      height: pieceWidth + cutWidth,
      top: 0,
      right: 0,
    }
  },
  bl: {
    type: "iwant",
    src : bl,
    src_w: bl_w,
    value: 'find_funding',
    name: 'Find Funding',
    white: true,

    divStyle: {
      left: 0,
      top : 2 * pieceWidth,
      transform: `translateX(-${offset}px) translateY(${verticalSpace + offset*2}px)`
    },
    style : {
      width: pieceWidth + cutWidth,
      height: pieceWidth + cutWidth,
      bottom: 0,
      left: 0,
    }
  },
  bm: {
    type: "iwant",
    src : bm,
    src_w: bm_w,
    value: 'get_advice',
    name: 'Get Advice',
    divStyle: {
      left: pieceWidth,
      top : 2 * pieceWidth,
      transform: `translateY(${verticalSpace + offset * 2}px)`

    },
    style : {
      width: pieceWidth,
      height: pieceWidth + cutWidth,
      bottom: 0,
      left: 0,
    }
  },
  br: {
    type: "iwant",
    src : br,
    src_w: br_w,
    white: true,

    value: 'share_expertise',
    name: 'Share Expertise',
    divStyle: {
      left: 2 * pieceWidth,
      top : 2 * pieceWidth,
      transform: `translateX(${offset}px) translateY(${verticalSpace + offset*2}px)`
    },
    style : {
      width: pieceWidth + cutWidth,
      height: pieceWidth,
      bottom: 0,
      right: 0,
    }
  },
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
  render() {
    const { piece, submit, iam, iwant } = this.props;
    let divStyle = {
      position: 'absolute',
      width: pieceWidth ,
      height: pieceWidth ,
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      cursor: 'pointer',
    }
    let translate = {};
    if(submit){
      translate = {
        transform: 'translateX(0) translateY(0)'
      }
    }
    let active = false;
    if(piece.type == "iam"){
      if(iam == piece.name){ active = true}
    }
    else{
      if(iwant.indexOf(piece.name) != -1){active = true}
    }
    return (
      <div
        className="transition"
        onClick={this.handleClick}
         style={{
           ...divStyle,
          ...piece.divStyle,
          ...translate,
          color: (active ) ? "white" :  Styles.mainColor
        }}>
        <img style={{
            position: 'absolute',
            opacity: (active && !submit) ? 1 : 1,
            ...piece.style,
          }}
          src={active ? piece.src : piece.src_w}/>
        <span style={{
            position:'absolute',
            width: 50,
            textAlign: 'center',
            display: (submit && !active) ? "none" : "block"
          }}>{piece.name}</span>

      </div>
    );
  }
}


export default class Page extends Component {
  state = {
    submit : false,
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
    console.log(piece.name);
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

    Data.data['student'].map((d, i) => {
      if(activeIwant.indexOf(d.category)!=-1){
        if(!ret[d.category][d.help_me]){
          ret[d.category][d.help_me] = []
        }
        ret[d.category][d.help_me].push(d)
      }
    })
    return ret
  }
  render(){
    const {  } = this.props;
    const { submit, activeIam, activeIwant } = this.state;

    let links = this._filterLinks(activeIam, activeIwant)
    return(
      <div style={{
          ...posCenter,
          width: pieceWidth*3,
          color: 'white',
        }}>
        <br/><br/>
        <h3>Resources</h3>
        <br/>
        <h4 style={{
            opacity: submit ? 0 : 1,
          }}>I am</h4>
        <br/>
        <h4
          style={{
            opacity: submit ? 0 : 1,
            ...posCenter,
            top: 2 * pieceWidth + verticalSpace + 30
          }}>and I want to</h4>
        <div style={{
            position: 'relative',
            color: Styles.mainColor,
            height: 3 * pieceWidth ,
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
        <div
           className="transition-links"
           style={{
            opacity: submit ? 1 : 0,
            transform: submit ? 'translateY(0)' : 'translateY(-30px)',
            backgroundColor: 'white',
            color: Styles.mainColor,
            padding: 20,
            marginTop: 25,
            zIndex: '-100',
            textAlign: 'left'
          }}>
          {Object.keys(links).map((header,i) => {
            return (
              <section key={i}>
                <br/>
                <h4 style={{textAlign:'center'}}>{header}</h4>
                <hr style={{width: 150, borderColor: Styles.mainColor}}/>
                <br/>
                {Object.keys(links[header]).map((help_me,j) => {
                  return (
                    <section key={j}>
                      <br/>
                      <p style={{textAlign:'center'}}>- {help_me} -</p>
                      {links[header][help_me].map((link, k) => {
                        return (
                          <p key={k}>
                            <a href={link.href} target="_blank">
                              {link.name}
                            </a>
                          </p>
                        )

                      })}
                    </section>
                  )
              })}
              </section>
            )
          })}
        </div>
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
            display: submit ? "none" : "flex"
          }}>
          <img style={{width: 25}} src={check}/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

    )
  }
}
