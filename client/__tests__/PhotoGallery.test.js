import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import PhotoGallery from '../components/PhotoGallery.jsx'
import { create } from "react-test-renderer"
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const baseProps = {
  showModal: false,
  clickedImageObj: {
    "id": 1,
    "image_url": "test",
    "sequence_id": 1,
    "caption": "test",
    "listing_id": 1
  },
  listingData: [
    {
      "id": 1,
      "image_url": "test",
      "sequence_id": 1,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 2,
      "image_url": "test",
      "sequence_id": 2,
      "caption": "test",
      "listing_id": 1
    }
  ],
};

let wrapper;
beforeEach(() => wrapper = shallow(<PhotoGallery {...baseProps}/>));


describe('Parent component has initial state props', () => {
  it('Should have a listingData prop', () => {
    expect(wrapper.state()).toHaveProperty('listingData')
  });

  it('Should have a showModal prop', () => {
    expect(wrapper.state()).toHaveProperty('showModal')
  });

  it('Should have a clickedImageObj prop', () => {
    expect(wrapper.state()).toHaveProperty('clickedImageObj')
  });
});

it('Should trigger handleCloseModal', () => {
  wrapper.instance().handleCloseModal();
  expect(wrapper.state('showModal')).toEqual(false);
});

it('Should render the image container', () => {
  expect(wrapper.exists('Image')).toEqual(true);
});
