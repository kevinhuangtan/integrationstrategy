import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login';

const Home = () => {
	return(
		<div className="home">
			<h1> Home Page </h1>
			<Login />
		</div>
	);
}

export default Home;
