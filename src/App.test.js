import { render } from '@testing-library/react';
import App from './App';

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