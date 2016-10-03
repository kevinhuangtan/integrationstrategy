import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchResource } from '../actions/index';
import { Link } from 'react-router'; 
import GoogleMap from './google_map';


class ResourceDetail extends Component{
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount (){
		this.props.fetchResource(this.props.params.id);
	}

	render(){
		const { resource } = this.props;

		if (!resource){
			return(<div>Loading...</div>);
		}

		return(
			<div>
				<h3>{resource.name}</h3>
				<h6>{resource.description}</h6>
				<div className="map"><GoogleMap lon={resource.lon} lat={resource.lat} /></div>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {resource: state.resources.resource};
}


export default connect(mapStateToProps, {fetchResource})(ResourceDetail);