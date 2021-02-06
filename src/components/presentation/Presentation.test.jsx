import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Presentation from "./Presentation";

configure({ adapter: new Adapter() });

describe('<Presentation>', () => {
  it('should render Presentation Component', () => {
    const wrapper = shallow(<Presentation />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});