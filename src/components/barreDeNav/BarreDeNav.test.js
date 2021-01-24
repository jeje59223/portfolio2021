import toJson from 'enzyme-to-json';
import React from 'react';
import BarreDeNav from "./BarreDeNav";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('<BarreDeNav>', () => {
  it('should render Navigation Bar', () => {
    const wrapper = shallow(<BarreDeNav/>);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});