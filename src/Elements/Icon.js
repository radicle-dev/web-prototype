import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Utils';

export default class Icon extends Component {
  static defaultProps = {
    color: colors.grey,
  };
  render() {
    switch (this.props.name) {
      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
          >
            <polygon
              fill={this.props.color}
              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97 29.7,31.11 31.11,29.7 16.97,15.56"
            />
          </svg>
        );
      case 'folder':
        return (
          <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <path
              d="M9.17,6l2,2H20v10L4,18V6H9.17 M10,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2	h-8L10,4L10,4z"
              fill={this.props.color}
            />
          </svg>
        );
      case 'file':
        return (
          <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <path
              d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M6,20V4h7v5h5v11 L6,20z"
              fill={this.props.color}
            />
          </svg>
        );
      default:
        return null;
    }
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
