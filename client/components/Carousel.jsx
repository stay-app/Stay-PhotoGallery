import React from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: block;
  margin: 0;
  margin-bottom: 32px;
  box-sizing: border-box;
  padding-top: 104px;
  width: 100%; /*this breaks the slider width to 0*/
`;

const CarouselSliderWrapper = styled.ul`
  display: flex;
  position: relative;
  width: '100%';
  left: 60px;
  max-height: 64px;
  overflow: hidden;
  transition: -webkit-transform 0.3s ease-out 0s;
  margin-bottom: 70px;
`;

const CarouselSlider = styled.li`
  display: list-item;
  float: left;
  overflow: hidden;
  border-radius: 4px;
  max-width: 64px;
  max-height: 64px;
  margin-right: 15px;
  list-style-type: none;
  border: none;
  outline: none
  background-color: transparent;
  cursor: pointer;
`;

const CarouselLeftGradient = styled.div`
  position: absolute;
  height: 64px;
  top: 15%;
  transform: rotate(180deg);
  z-index: 1;
  width: 20px;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%);
`;

const CarouselRightGradient = styled.div`
  position: absolute;
  right: 0;
  top: 15%;
  height: 64px;
  z-index: 1;
  width: 20px;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%);
`;

const CarouselDetailsWrapper = styled.div`
  padding: 0px 40px 0px 0px;
`;

const CarouselCount = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

const Caption = styled.div`
  word-break: break-word;
  line-height: 1.375em;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCarouselClick(e) {
    const clickedImageObj = this.props.listingData.filter((img) => img.sequence_id === Number(e.target.id))[0];
    this.props.changeClickedObj(clickedImageObj);
  }

  render() {
    if (this.props.clickedImageObj) {
      return (
        <CarouselWrapper>
          <CarouselLeftGradient/>
          <CarouselRightGradient/>
          <CarouselSliderWrapper style={{ transform: `translateX(-${this.props.clickedImageObj.sequence_id * (1500 / this.props.listingData.length)}px)` }}>
            {/* <div style={{ position: 'absolute', right: '74.4%', background: 'white', zIndex: '1', height: '64px', width: '100px' }}></div> */}
          {this.props.listingData.map((img, idx) => {
            return (
                  <CarouselSlider key={idx}>
                    <img
                      onClick={this.handleCarouselClick.bind(this)}
                      id={img.sequence_id}
                      className={`seq-${img.sequence_id}`}
                      src={img.image_url}
                      alt=''
                      key={`seq-id-${img.listing_id}`}
                      style={{ height: '100%', width: 'auto', borderRadius: '4px' }}
                    />
                  </CarouselSlider>
            );
          })}
          </CarouselSliderWrapper>
          <CarouselDetailsWrapper>
            <CarouselCount id='img-totals'>{this.props.clickedImageObj.sequence_id} / {this.props.listingData.length}</CarouselCount>
            <Caption id='img-caption'>{this.props.clickedImageObj.caption}</Caption>
          </CarouselDetailsWrapper>
        </CarouselWrapper>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
