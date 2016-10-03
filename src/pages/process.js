import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProcessDetail from '../components/process_detail'
import ProcessList from '../components/process_list'
import {processContent} from '../zfiles/process_content'

class Process extends Component {
	constructor(props){
		super(props);

		this.state=
		{
			processItems: processContent,
			selectedProcess: null
		};
	}

	componentDidMount(){
		this.setState({ selectedProcess: this.state.processItems[0]})
	}

	render(){

		return(
			<div>
				<h1> Process Page </h1>
				<ProcessDetail process={this.state.selectedProcess}/>
				<ProcessList 
					onProcessSelect={selectedProcess => this.setState({selectedProcess})}
					processItems={this.state.processItems} />
			</div>
		);
	}

}

export default Process;