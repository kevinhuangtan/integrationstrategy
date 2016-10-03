import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Header = () => {
	return(
		<div>
			<span>
				<h3> header </h3>
				<Link to="/" className="btn btn-danger">Home</Link>
				<Link to="/process" className="btn btn-primary">Process</Link>
				<Link to="/training" className="btn btn-primary">Training</Link>
				<Link to="/resources" className="btn btn-primary">Resources</Link>
			</span>
		</div>

	);
}

export default Header;