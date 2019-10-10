import React, { Component } from "react";
import debounce from "lodash.debounce";

import Button from "./Button";

/**
 * Modal component is a generic modal that can be used sitewide.
 * @type {Object}
 */

class Modal extends Component {
  constructor(props) {
    super(props);

    this.debounceAction = debounce(this.handleClick, 500);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles a debounced click action.
   * @param {string} type string that determines which method to call on user click.
   */
  handleClick = type => {
    if (type === "close") {
      this.props.close();
      return;
    }
  };

  render() {
    return (
      <div
        id={this.props.id ? this.props.id : "modal"}
        className={this.props.classes ? "modal " + this.props.classes : "modal"}
      >
        <div
          id={
            this.props.id ? this.props.id + "-foreground" : "modal-foreground"
          }
          className="modal-foreground"
        >
          <div className="close" onClick={() => this.debounceAction("close")}>
            Close
          </div>

          <div
            id={this.props.id ? this.props.id + "-inner" : "modal-inner"}
            className="modal-inner"
          >
            <h1>How To Play This Game</h1>
            <div className="text">
              <p>
                Drive your boat with the “<strong>MOVE</strong>” control.
              </p>
              <p>
                Rotate your boat with the “<strong>TURN</strong>” control.{" "}
              </p>
              <p>
                When you are positioned for the line-up, press the “
                <strong>FOUND IT</strong>” button.
              </p>
            </div>
            <Button
              label="Ok"
              onClick={() => {
                this.debounceAction("close");
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
