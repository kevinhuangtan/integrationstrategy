import React, { Component } from 'react';
import { Link } from 'react-router';


var provider = new firebase.auth.TwitterAuthProvider();

class Login extends Component {
	constructor(props){
		super(props)

		this.state={ title: "signin" };
	}

	componentDidMount(){
		firebase.initializeApp(config);
	}

	twitterSignUp(){
		console.log("clicked");
		firebase.auth().signInWithRedirect(provider);
	}

  render() {
    return (
      <div>
      	Performer? <Link id="signup" onClick={this.twitterSignUp.bind(this)}>Sign up</Link> for the Beta
      </div>
    );
  }
}


export default Login;


firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
