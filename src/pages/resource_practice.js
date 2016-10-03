import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import * as firebase from 'firebase';
import ResourceTypeList from '../components/resource_type_list'
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
				<h1> Resources Practice Page </h1>
				<ResourceTypeList />
			</div>
		);
	}

}

export default Resources;