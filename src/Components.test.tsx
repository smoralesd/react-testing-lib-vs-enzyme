import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import * as React from 'react';
import { Top, TopProps } from "./Components";

describe("Component", () => {
  const props: TopProps = {
    topMessage: "top level container message",
    middleMessage: "middle tier message",
    bottomProps: "bottom level message",
  };

  it('renders using enzyme and matches snapshot', () => {
      const result = shallow(<Top {...props}/>);

      expect(result.getElement()).toMatchSnapshot();
  });

  it('renders using react-test-library and matches snapshot', () => {
      const result = render(<Top {...props}/>);

      expect(result).toMatchSnapshot();
  });
});
