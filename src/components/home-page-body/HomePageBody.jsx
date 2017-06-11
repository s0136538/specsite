import React from 'react';
import markdownFile from './home.md';

export default class HomePageBody extends React.Component {

  rawMarkup() {
    return {
      __html: markdownFile
    };
  }

  render() {
    console.log('xx: ' + markdownFile)
    return(
       <div dangerouslySetInnerHTML={this.rawMarkup()} />
    );
  }
}