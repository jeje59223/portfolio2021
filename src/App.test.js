import { render } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText();
  // expect(linkElement).toBeInTheDocument();
});

// describe('<BarreDeNav>', () => {
//   it('should render Navigation Bar', () => {
//     const wrapper = shallow(<BarreDeNav/>);
//     const json = toJson(wrapper);
//     expect(json).toMatchSnapshot();
//   });
// });
