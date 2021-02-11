import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Projets from './Projets';

configure({ adapter: new Adapter() });

describe('<Projets>', () => {
  it('should render Projets Component', () => {
    const wrapper = shallow(<Projets />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});
