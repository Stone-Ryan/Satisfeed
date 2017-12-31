import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew'
import Thankyou from './Thankyou'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
          <Route path='/api/surveys/:surveyId/:choice' component={Thankyou} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
