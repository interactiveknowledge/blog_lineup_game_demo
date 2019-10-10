import React, { Component } from "react";
import ArrowKeysReact from "arrow-keys-react";
import debounce from "lodash.debounce";

/**
 * Dpad compontent used in GameLocation.js to move Boat component.
 * @type {Object}
 *
 * @uses arrow-keys-react
 * @uses react-swipeable
 */

import Button from "./Button";

class DPad extends Component {
  constructor(props) {
    super(props);

    this.debounceAction = debounce(this.handleAction, 50);

    ArrowKeysReact.config({
      left: () => {
        if (this.props.ready === "aim") {
          this.debounceAction("keypress", "left");
        } else if (this.props.disabled.w !== true) {
          this.debounceAction("click", "w");
        }
      },
      right: () => {
        if (this.props.ready === "aim") {
          this.debounceAction("keypress", "right");
        } else if (this.props.disabled.e !== true) {
          this.debounceAction("click", "e");
        }
      },
      up: () => {
        if (this.props.ready === "aim") {
          this.debounceAction("click", "fire");
        } else if (this.props.disabled.n !== true) {
          this.debounceAction("click", "n");
        }
      },
      down: () => {
        if (this.props.ready !== "aim" && this.props.disabled.s !== true) {
          this.debounceAction("click", "s");
        }
      }
    });
  }

  /**
   * Handles a debounced click action.
   * @param {enum} type string. expects either "click" or "rotate" or "keypress"
   * @param {string} direction string that determines which button the user has clicked.
   */
  handleAction(type, direction) {
    if (type === "click") {
      this.props.onClick(direction);
      return;
    }
    if (type === "keypress") {
      this.props.handleKeyPress(direction);
      return;
    }

    if (type === "rotate") {
      this.props.handleRotate(direction);
      return;
    }
  }

  render() {
    return (
      <div id="controls" {...ArrowKeysReact.events}>
        <div className="label">Move</div>
        <div
          id="dpad"
          className={
            "stage-" +
            this.props.stage +
            (this.props.map === 1 && this.props.stage === 1 ? " start" : " ")
          }
        >
          <div className="blank">&nbsp;</div>

          <Button
            classes="up"
            disabled={this.props.disabled.n === true ? "disabled" : null}
            label={this.props.stage === 2 ? "forward" : "up"}
            onClick={() => this.debounceAction("click", "n")}
          />

          <div className="blank">&nbsp;</div>

          <Button
            classes="left"
            disabled={
              this.props.stage === 2 || this.props.disabled.w === true
                ? "disabled"
                : null
            }
            label="left"
            onClick={() => this.debounceAction("click", "w")}
          />

          <div className="blank center">Move</div>

          <Button
            classes="right"
            disabled={
              this.props.stage === 2 || this.props.disabled.e === true
                ? "disabled"
                : null
            }
            label="right"
            onClick={() => this.debounceAction("click", "e")}
          />

          <div className="blank">&nbsp;</div>

          <Button
            classes="down"
            disabled={this.props.disabled.s === true ? "disabled" : null}
            label={this.props.stage === 2 ? "back" : "down"}
            onClick={() => this.debounceAction("click", "s")}
          />

          <div className="blank">&nbsp;</div>
        </div>

        <div className="label">Turn</div>

        <div id="turn">
          <Button
            classes="rotate left"
            label="Rotate Left"
            onClick={() => this.debounceAction("rotate", "left")}
          />

          <Button
            classes="rotate right"
            label="Rotate Right"
            onClick={() => this.debounceAction("rotate", "right")}
          />
        </div>

        <Button
          classes={"fire-button " + this.props.ready}
          id="fire-button"
          label="Found It"
          onClick={() => this.debounceAction("click", "fire")}
        />
      </div>
    );
  }
}

export default DPad;
