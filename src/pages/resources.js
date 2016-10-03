import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import * as firebase from 'firebase';
import ResourceList from '../components/resource_list'
//import ResourceTypes from '../components/resource_type_list'


class Resources extends Component {
	constructor(props){
		super(props)

		this.state={ title: "wassup" };
	}

	componentDidMount(){
	}

	render(){
		return(
			<div>
				<h1> Resources Page </h1>
				<ResourceList />
			</div>
		);
	}

}

export default Resources;