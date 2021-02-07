import toJson from 'enzyme-to-json';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Reseaux from "./Reseaux";

configure({ adapter: new Adapter() });

describe('<Reseaux>', () => {
  it('should render Reseaux Component', () => {
    const wrapper = shallow(<Reseaux />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});