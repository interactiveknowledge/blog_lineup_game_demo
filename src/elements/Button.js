import React, { Component } from "react";
import debounce from "lodash.debounce";

/**
 * Generic button compontent used throughout the site.
 * @type {Object}
 */

class Button extends Component {
  constructor(props) {
    super(props);

    this.debounceAction = debounce(this.handleClick, 500);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles a debounced click action.
   */
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button
        className={
          "button-" +
          this.props.label.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() +
          (this.props.classes ? " " + this.props.classes : "")
        }
        disabled={this.props.disabled ? this.props.disabled : false}
        id={
          this.props.id
            ? this.props.id
            : "button-" +
              this.props.label.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        }
        onClick={() => this.debounceAction()}
        ref={this.props.ref}
        style={this.props.styles ? this.props.styles : null}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
