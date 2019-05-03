import React, { Component, FC } from "react";

const Hello: FC = () => <div>Hello!</div>;

const logProps = (WrappedComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      /* eslint no-console: 0 */
      console.log("Component is rendered.");
    }

    render() {
      return <WrappedComponent />;
    }
  };
};

export default logProps(Hello);
