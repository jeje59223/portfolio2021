import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from "react";
import Competences from "./Competences";

configure({ adapter: new Adapter() });

describe('<Competences>', () => {
  it('should render Competences', () => {
    const wrapper = shallow(<Competences />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});