import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;
`;

const LeftHalf = styled.div`
  border: 1px solid red;
  float: left;
  background-image: url('${(props) => props.imgObj}');
`;

const RightHalf = styled.div`
  border: 1px solid red;
  float: right;
`;

const Quadrant = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  handleImageClick() {
    // do something
  }

  handleImageHover() {
    // do something
  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <Wrapper>
          <LeftHalf imgObj={this.props.listingData[0].image_url}>
            {/* <img src={this.props.listingData[0].image_url} alt="" /> */}
          </LeftHalf>
          <RightHalf>
            <Quadrant>
              <img src={this.props.listingData[1].image_url} alt="" />
              <img src={this.props.listingData[2].image_url} alt="" />
              <img src={this.props.listingData[3].image_url} alt="" />
              <img src={this.props.listingData[4].image_url} alt="" />
            </Quadrant>
          </RightHalf>
        </Wrapper>
      )
    } else {
      return <div className='image-container'>Loading...</div>
    }
  }
}

export default Image;
