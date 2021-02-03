import toJson from 'enzyme-to-json';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// eslint-disable-next-line no-unused-vars
import BarreDeNav from './BarreDeNav';

configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
describe('<BarreDeNav>', () => {
  // eslint-disable-next-line no-undef
  it('should render Navigation Bar', () => {
    const wrapper = shallow(<BarreDeNav/>);
    const json = toJson(wrapper);
    // eslint-disable-next-line no-undef
    expect(json).toMatchSnapshot();
  });
});
