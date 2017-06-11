import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import logo from './edmc-logo.jpg';
import './App.css';
import HomePageBody from '../home-page-body/HomePageBody.jsx';

const toolbarTitle = <p>Welcome to the {process.env.REACT_APP_ORGANIZATION_NAME_SHORT}'s specification site</p> ;

export default class App extends React.Component {

  render() {
    return (
      <NavigationDrawer
        drawerTitle={process.env.REACT_APP_ORGANIZATION_NAME_SHORT}
        toolbarTitle={toolbarTitle}
      >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to {process.env.REACT_APP_ORGANIZATION_NAME_SHORT}</h2>
          </div>
          <HomePageBody />
        </div>
      </NavigationDrawer>
    );
  }
}
