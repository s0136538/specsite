/* @flow */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {deepOrange500} from 'material-ui/styles/colors';

import Toolbar from '../../components/Toolbar';
import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import styles from './styles.scss';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default () => {
  // Use it when sub routes are added to any route it'll work
  const routeWithSubRoutes = route => (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="md-grid">
        <Helmet {...config.app} />
        <Toolbar />
        <div className={styles.header}>
          <img src={require('./assets/edmc-logo.svg')} alt="Logo" role="presentation" />
          <h1>{config.app.title}</h1>
        </div>
        <hr />
        <Switch>
          {routes.map(route => routeWithSubRoutes(route))}
        </Switch>
      </div>
    </MuiThemeProvider>
  );
};
