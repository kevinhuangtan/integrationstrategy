import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources } from '../actions/index';
import { Link } from 'react-router'; 
import GoogleMap from './google_map';

class ResourceList extends Component{
	componentWillMount (){
		this.props.fetchResources();
	}

	constructor(props){
		super(props);

		this.state = { lon: null, lat: null}
	}

	renderResources(){
		return this.props.resources.map((resource) => {
			return(
				<li className="list-group-item" key={resource.id}>
					<Link to={"resources/" + resource.type + '/' + resource.id} >
						<span className="pull-xs-right">Location: {resource.lat},{resource.lon}</span>
						<strong>{resource.name}</strong>
					</Link>
				</li>
			);
		});
	}

	render(){

		return(
			<div>
				Resources
				<div className="map"><GoogleMap lon={-25.363882} lat={131.044922} /></div>
				<ul className="list-group">
					{this.renderResources()}
				</ul>
				
			</div>
		);
	}

}

function mapStateToProps(state){
	return { resources: state.resources.all };
}

export default connect(mapStateToProps, {fetchResources})(ResourceList);