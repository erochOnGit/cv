import React from "react";

const EnhanceHSL = HSL =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mousex: null,
        mousey: null
      };
      this.onMouseUpdate = this.onMouseUpdate.bind(this);
    }
    onMouseUpdate = e => {
      console.log("fgtfd" + e);
      this.setState({ mousex: e.pageX });
      this.setState({ mousey: e.pageY });
    };
    render() {
      return (
        <HSL
          onMouseEnter={this.onMouseUpdate}
          onMouseMove={this.onMouseUpdate}
          // onClick={console.log("e") || this.onMouseUpdate}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
export default EnhanceHSL;
