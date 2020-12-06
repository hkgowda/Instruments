import React, { Component } from "react";
import PropTypes from "prop-types";

import "./avatar.css";

export class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "avatar " + this.props.size
    };
  }

  static defaultProps = {
    alt: "Harsha"
  };

  static propTypes = {
    imgSrc: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    handleAvatarClick: PropTypes.func
  };

  render() {
    return (
      <a onClick={this.props.handleAvatarClick}>
        <img
          src={this.props.imgSrc}
          alt={this.alt}
          className={this.state.className}
        ></img>
      </a>
    );
  }
}
