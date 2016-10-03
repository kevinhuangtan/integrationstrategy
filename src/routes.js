import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/app'

//Pages
import LandingPage from './pages/landing_page'
import Home from './pages/home'
import Process from './pages/process'
import Resources from './pages/resources'
//import ResourceTypes from './components/resource_type_list'
import ResourceList from './components/resource_list'
import ResourceShow from './components/resource_show'
import Training from './pages/training'

export default(
	<Route path="/" component={App} >
		<IndexRoute component={LandingPage} />

	</Route>
);
		// <IndexRoute component={Home} />
		// <Route path="process" component={Process} />
		// <Route path="training" component={Training} />
		// <Route path="resources" component={Resources} />
		// <Route path="resources/:type/:id" component={ResourceShow} />


		// 	<Route path="process/:topicId" component={Process_Detail} />
		// </Route>

		// 	<Route path="training/:videoId" component={Video_Detail} />
		// </Route>

		// <Route path="resources/:type/" component={ResourceType} />
		// <Route path="resources/:type/:name" component={ResourceDetail} />