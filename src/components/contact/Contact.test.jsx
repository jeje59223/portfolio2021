import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from "react";
import Contact from "./Contact";

configure({ adapter: new Adapter() });

describe('<Contact>', () => {
  it('should render Contact Form', () => {
    const wrapper = shallow(<Contact />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});