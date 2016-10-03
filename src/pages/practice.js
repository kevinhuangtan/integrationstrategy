import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCd8UY6w9_pKeCHqT9iFt7RDQJvm58lixI",
  authDomain: "iliac-57f28.firebaseapp.com",
  databaseURL: "https://iliac-57f28.firebaseio.com",
  storageBucket: "iliac-57f28.appspot.com",
};
firebase.initializeApp(config);

class Practice extends Component {
	constructor(props){
		super(props)

		this.state={ title: "wassup" };
	}

	componentDidMount(){
		const rootRef = firebase.database().ref('Process');
		const titleRef = rootRef.child('title');
		titleRef.on('value', snap => {
			this.setState({
				title: snap.val()
			});
		});
	}

	render(){
		return(
			<div>
				<h1> Practice Page </h1>
				{this.state.title}
			</div>
		);
	}

}

export default Practice;