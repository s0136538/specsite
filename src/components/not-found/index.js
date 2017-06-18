import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h1 className="md-text-container">Oops!</h1>;
  }
}

NotFound.defaultProps = {
  className: null,
  children: [],
};
