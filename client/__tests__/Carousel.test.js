import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../components/Carousel.jsx';

configure({ adapter: new Adapter() });

const baseProps = {
  clickedImageObj: {
    "id": 1,
    "image_url": "test",
    "sequence_id": 1,
    "caption": "test",
    "listing_id": 1
  },
  changeClickedObj: () => {},
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
  ],
};

const wrapper = shallow(<Carousel {...baseProps}/>);

it('should render a list', () => {
  expect(wrapper.find('.carousel-list').children().length).toBeGreaterThan(0);
});

it('should render a list of images', () => {
  expect(wrapper.find('.seq-1').prop('src')).toEqual('test');
});

it('should render a count of images', () => {
  expect(wrapper.find('#img-totals').text()).toEqual('1/5');
});

it('should render the current image caption', () => {
  expect(wrapper.find('#img-caption').text()).toEqual('test');
});
