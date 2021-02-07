import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from "react";
import ExperiencesPro from "./ExperiencesPro";

configure({ adapter: new Adapter() });

describe('<ExperiencesPro>', () => {
  it('should render ExperiencesPro component', () => {
    const wrapper = shallow(<ExperiencesPro />);
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  });
});