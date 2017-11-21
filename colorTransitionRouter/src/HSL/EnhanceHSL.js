import React from "react";
import styles from "../styles";

const EnhanceHSL = HSL =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mousex: null,
        mousey: null,
        dragging: false,
        translateX: 0,
        startingX: 0
      };
      this.dragStart = this.dragStart.bind(this);
      this.dragStop = this.dragStop.bind(this);
      this.mouseMove = this.mouseMove.bind(this);
    }
    style = params => {
      return this.state.dragging
        ? {
            ...styles.fill,
            ...styles.hsl,
            background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`,
            transform: `translate(${this.state.translateX -
              this.state.startingX}px)`
          }
        : {
            ...styles.fill,
            ...styles.hsl,
            background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
          };
    };
    dragStart = e => {
      this.setState({ mousex: e.pageX });
      this.setState({ mousey: e.pageY });
      this.setState({ translateX: e.pageX });
      this.setState({ startingX: e.pageX });
      this.setState({ dragging: true });
      var crt = document.createElement("img");
      crt.id = "removable";
      crt.style.display =
        "none"; /* or visibility: hidden, or any of the above */
      document.body.appendChild(crt);
      e.dataTransfer.setDragImage(crt, 0, 0);
    };
    dragStop = e => {
      this.setState({ mousex: e.pageX });
      this.setState({ mousey: e.pageY });
      this.setState({ dragging: false });
      this.setState({ translateX: 0 });
      document.body.removeChild(document.getElementById("removable"));
    };
    mouseMove = e => {
      if (this.state.dragging) {
        this.setState({ mousex: e.pageX });
        this.setState({ translateX: this.state.mousex });
      }
    };
    render() {
      return (
        <HSL
          styleAssignation={this.style}
          actions={{
            start: this.dragStart,
            stop: this.dragStop,
            move: this.mouseMove
          }}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
export default EnhanceHSL;
