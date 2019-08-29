import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { create } from "react-test-renderer"
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../components/Modal.jsx';

configure({ adapter: new Adapter() });

it('modal root div exists', () => {
  const wrapper = shallow(<Modal/>);
  const modalRoot = document.getElementById('modal-root');
  // expect(wrapper.exists('.modal-root')).toEqual(true);
});