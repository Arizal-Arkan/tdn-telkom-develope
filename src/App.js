import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout/BaseLayout';
import pages from './pages';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route component={pages.Home} exact path="/" />
        <Layout>
          <Switch>
            {/* <Route component={pages.Intro} exact path="/" /> */}
            <Route component={pages.Profile} exact path="/profile" />
            <Route component={pages.Service} exact path="/service" />
            <Route component={pages.Project} exact path="/project" />
            <Route component={pages.Gallery} exact path="/gallery" />
            <Route component={pages.Partner} exact path="/partnership" />
            <Route component={pages.Testimoni} exact path="/testimoni" />
            <Route component={pages.Contact} exact path="/contact" />
            <Route component={pages.DetailService} exact path="/service/:name" />
          </Switch>
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
