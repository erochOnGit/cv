import React from "react";

const EnhanceAnimationExample = AnimationExample =>
  class extends React.Component {
    render() {
      return <AnimationExample />;
    }
  };
export default EnhanceAnimationExample;
