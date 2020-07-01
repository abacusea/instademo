import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import * as Images from '../../assets/images'
import Main from './main'
import NavBar from './navbar'
import TimeLine from '../Timeline/index'
import BookMarks from '../BookMarks'

const HomePage = () => {
  return (
    <Router history={createBrowserHistory()}>
        <div className="section-primary">
            <Main />
            <NavBar />
            <Switch>
                <Route exact path="/" component={TimeLine} />
                <Route exact path="/bookmark" component={BookMarks} />
            </Switch>
        </div>
    </Router>
  )
}

export default HomePage