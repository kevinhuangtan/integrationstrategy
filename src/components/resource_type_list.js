import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResourceTypes } from '../actions/index';
import { Link } from 'react-router'; 


class ResourceTypeList extends Component{
	componentWillMount (){
		this.props.fetchResourceTypes();
	}

	renderResourceTypes(){
		return this.props.resourceTypes.map((resourceType) => {
			return(
				<li className="list-group-item" key={resourceType.name}>
					<Link to={"resources/" + resourceType.name} >
						<span className="pull-xs-right">Number of Instances</span>
						<strong>{resourceType.name}</strong>
					</Link>
				</li>
			);
		});
	}

	render(){
		return(
			<div>
				Resource Types
				<ul className="list-group">
					{this.renderResourceTypes()}
				</ul>
			</div>
		);
	}

}

function mapStateToProps(state){
	return { resourceTypes: state.resourceTypes.all };
}

export default connect(mapStateToProps, {fetchResourceTypes})(ResourceTypeList);
