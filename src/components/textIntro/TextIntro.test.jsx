import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TextIntro from './TextIntro';

configure({ adapter: new Adapter() });

describe('<TextIntro>', () => {
  it('should render TextIntro Component', () => {
    const wrapper = shallow(<TextIntro />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});
