import React, { PropTypes, Component } from 'react';

import Styles from '../styles'
import windfarm from '../assets/windfarm.png'
import energy from '../assets/energy.png'

const info = [
  {
    title : "WHO WE ARE AND WHAT WE DO",
    body : "We are a boutique strategy & implementation consultancy.  We increase investor returns by taking businesses to the next level of strategic focus, organizational effectiveness and quantified results."
  },
  {
    title : "OUR CLIENTS",
    body : "Clients have included: private equity firms, their portfolio companies, corporations, government agencies, not-for-profit and academic institutions"
  },
  {
    title : "HOW WE CREATE VALUE",
    body : "We construct practical roadmaps that lay out the path to achieve key strategic goals that drive value, and performance indicators to measure progress.  We execute by aligning and streamlining activity to attain those goals with urgency."
  },
  {
    title : "WHAT DIFFERENTIATES US",
    body : "Creative problem solving is our core strength.  Translators comfortable across disciplines, functions and cultures, we apply breath of perspective to meld innovative cross-silo solutions.  Goal-oriented communicators, we engage, equip and synchronize all parties in executing those solutions."
  }
]
const styles = {
  box :{
      width: 400,
      textAlign:'left',
      margin: 20
  }
}

class Box extends Component {
  render(){
    const { obj } = this.props;
    return (
      <div style={styles.box}>
        <h3
          className="borderGrow"
          style={{
            cursor:'pointer',
            color:Styles.mainColor
          }}>{obj.title}</h3>
        <p>{obj.body}</p>
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    return (
      <section>
        <hr/>
        <div>
          <h4>INTEGRATION STRATEGY</h4>
          <p>info@integrationstrategy.com</p>
          <p>+1 (212) 222-9802</p>
          <br/>
          <p>Integration Strategy Inc.</p>
          <p>2578 Broadway #124</p>
          <p>New York, NY 10025</p>
          <p>United States</p>
        </div>
        <div>
          <h4>Pages</h4>
          <p>Home</p>
          <p>Private Equity</p>
          <p>Energy</p>
          <p>Environment & Impact</p>
          <p>Clients & Industry Experience</p>
          <p>About Us</p>
        </div>

      </section>
    )
  }
}

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
      <section>
        <br/>
        <section
          style={{
            width: 880,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems:'flex-start',
            justifyContent: 'flex-start'
          }}>
          {info.map((obj, i) => {
            return <Box key={i} obj={obj}/>
          })}
          <div style={{
              width: "100%",
              textAlign:'left',
              margin: 20
            }}>
            <h3>OUR STRATEGY & EXECUTION SERVICES</h3>
            <p>We provide three sets of strategy and execution services</p>
            <br/>
            <div style={{
                display:"flex",
                flexDirection: 'row'
              }}>
              <div style={{
                marginRight: 20,
                width: 250

                }}>
                <img src={windfarm} style={{width: 250}}/>
                <h4>Private Equity</h4>
                <p>We apply pargamatic strategy and execution skills throughout the deal sourcing, evaluation, hold and exit process to maximize portfolio company EBITDA, growth and multiples</p>
              </div>
              <div style={{
                  marginRight: 20,
                  width: 250
                }}>
                <img src={energy} style={{width: 250}}/>
                <h4>Energy</h4>
                <p>We apply industyr knowledge and executive experience to sharpen strategy, build investor storylines and evaluate organic growth and acquisition opportunities.</p>

              </div>
            </div>
          </div>
          <div style={{
              ...styles.box,
              width: 600,
              margin: 20
            }}>
            <h3 style={{
                color:Styles.mainColor
              }}>Firm History</h3>
            <p>We were established in 2005 to serve private equity and portfolio company clients.  Our client base grew to include corporations, government agencies, and not-for-profit and academic institutions.</p>
            <p>Our founding coincided with the start of the shale revolution.  Building upon oil services expertise, our industry knowledge expanded to encompass the breadth of fossil-based and renewable sources of energy.</p>
            <p>Concurrently, corporations began perceiving environment as a risk and strategic opportunity.  Accordingly, we built early energy and environment expertise that quickly extended to impact investing and sustainability.</p>
          </div>

        </section>
      </section>
    )
  }
}
