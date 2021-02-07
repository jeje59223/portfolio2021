import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from "./Footer";

configure({ adapter: new Adapter() });

describe('<Footer>', () => {
  it('should render Footer', () => {
    const wrapper = shallow(<Footer />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});