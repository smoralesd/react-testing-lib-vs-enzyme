import * as React from "react";

export type TopProps = MiddleProps & {
  topMessage: string;
};

export class Top extends React.PureComponent<TopProps> {
  public render() {
    return (
      <>
        <h1>Container</h1>
        Container message: {this.props.topMessage}
        <Middle {...this.props} />
      </>
    );
  }
}

type MiddleProps = BottomProps & {
  middleMessage: string;
};

class Middle extends React.PureComponent<MiddleProps> {
  public render() {
    return (
      <>
        <h2>In the middle</h2>
        Middle message is {this.props.middleMessage}
        <br></br>
        <Bottom {...this.props} />
      </>
    );
  }
}

type BottomProps = {
  bottomProps: string;
};

class Bottom extends React.PureComponent<BottomProps> {
  public render() {
    return <span>Leaf message is: {this.props.bottomProps}</span>;
  }
}
