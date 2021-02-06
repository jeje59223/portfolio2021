import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Loisirs from "./Loisirs";

configure({ adapter: new Adapter() });

describe('<Loisirs>', () => {
  it('should render Loisirs Component', () => {
    const wrapper = shallow(<Loisirs />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});