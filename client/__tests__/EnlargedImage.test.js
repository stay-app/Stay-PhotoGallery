import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { create } from "react-test-renderer"
import Adapter from 'enzyme-adapter-react-16';
import EnlargedImage from '../components/EnlargedImage.jsx';

configure({ adapter: new Adapter() });

const baseProps = {
  handleImageClick: () => {},
  handleImageHover: () => {},
  clickedImageObj: {
    "id": 1,
    "image_url": "test",
    "sequence_id": 1,
    "caption": "test",
    "listing_id": 1
  },
  'listingData': [
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
    },
    {
      "id": 3,
      "image_url": "test",
      "sequence_id": 3,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 4,
      "image_url": "test",
      "sequence_id": 4,
      "caption": "test",
      "listing_id": 1
    },
    {
      "id": 5,
      "image_url": "test",
      "sequence_id": 5,
      "caption": "test",
      "listing_id": 1
    }
  ]
};

const wrapper = shallow(<EnlargedImage {...baseProps}/>);

it('Displays the MainImage div', () => {
  console.log(wrapper.debug());
  expect(wrapper.exists('EnlargedImage__MainImage')).toEqual(true);
});

it('Has next and back buttons', () => {
  expect(wrapper.exists('#btn-back')).toEqual(true);
  expect(wrapper.exists('#btn-next')).toEqual(true);
});
