import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../client/components/App';

// describe('First React component test with Enzyme', () => {
//    it('renders without crashing', () => {
//       shallow(<App />);
//     });
// });

it('handleOpenmodal changes state after image click', () => {
  const img = shallow(<Image/>);
  const modal = shallow(<Modal/>);
  console.log(img.debug())
  console.log(modal.debug())
  // img.prototype.handleOpenModal = jest.fn();
  // img.simulate('click');
  // expect(img.)
});