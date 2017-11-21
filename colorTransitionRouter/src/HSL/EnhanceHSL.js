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
        translateX: 0
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
            transform: `translate(${this.state.translateX}px)`,
            transition: "transform 300ms ease-in-out"
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
      this.setState({ dragging: true });
    };
    dragStop = e => {
      console.log("stop");
      this.setState({ mousex: e.pageX });
      this.setState({ mousey: e.pageY });
      this.setState({ dragging: false });
      this.setState({ translateX: 0 });
    };
    mouseMove = e => {
      if (this.state.dragging) {
        this.setState({ mousex: e.pageX });
        this.setState({ translateX: this.state.mousex });
      }
      console.log(this.state.translateX);
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
