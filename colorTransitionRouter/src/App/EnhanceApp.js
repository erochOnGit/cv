import React from "react";

const EnhanceApp = App =>
  class extends React.Component {
    state = {
      colors: null
    };
    componentDidMount() {
      fetch("https://api.myjson.com/bins/zrhtn")
        .then(res => res.json())
        .then(colors => {
          this.setState({ colors });
        });
    }
    render() {
      return <App {...this.state} />;
    }
  };
export default EnhanceApp;
