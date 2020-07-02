import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Feed from '../post-feed'
// import BookMark from '../bookmark'

const HomePage = () => {
  return (
  	<Router history={createBrowserHistory()}>
		  <Switch>
	        <Route exact path="/" component={Feed} />
		  </Switch>
		</Router>
  )
}

export default HomePage