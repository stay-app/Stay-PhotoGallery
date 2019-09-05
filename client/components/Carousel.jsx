import React from 'react';
// import styled from 'styled-components';

// to do
// if selected last carousel item, hide right gradient
// apply border to carousel item when it's clicked
// apply brightness to carousel item unless it's selected or hovered
// breakpoint to make carousel item 48px: width: 1200px
// breakpoint to move carousel to bottom: width: 1128px

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
  position: absolute;
  max-height: 64px;
  width: auto%:
  overflow: hidden;
  transition: -webkit-transform 0.3s ease-out 0s;
  margin-top: 5%;
  margin-bottom: 70px;
`;
// transform: `translateX(-${this.props.clickedImageObj.sequence_id * (1700 / this.props.listingData.length)}px)`

const CarouselSliderItem = styled.li`
  display: list-item;
  float: left;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 15px;
  list-style-type: none;
  max-width: 64px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const CarouselLeftGradient = styled.div`
  position: absolute;
  height: 64px;
  top: 22%;
  transform: rotate(180deg);
  z-index: 1;
  width: 20px;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%);
`;

const CarouselRightGradient = styled.div`
  position: absolute;
  right: 0;
  top: 22%;
  height: 64px;
  z-index: 1;
  width: 20px;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%);
`;

const CarouselDetailsWrapper = styled.div`
  padding: 0px 40px 0px 0px;
`;

const CarouselCount = styled.div`
  margin-top: 60%;
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
    this.inputRef = React.createRef();
  }

  handleCarouselClick(e) {
    // this.inputRef.current.setAttribute('border', '3px solid #484848');
    this.inputRef.current.setAttribute('opacity', '1');
    console.log(this.inputRef.current);
    const clickedImageObj = this.props.listingData.filter((img) => img.sequence_id === Number(e.target.id))[0];
    this.props.changeClickedObj(clickedImageObj);
  }

  render() {
    if (this.props.clickedImageObj) {
      return (
        <CarouselWrapper>
          <CarouselLeftGradient/>
          <CarouselRightGradient/>
          <CarouselSliderWrapper style={{transform: `translateX(-${this.props.clickedImageObj.sequence_id * (1700 / this.props.listingData.length)}px)`}}>
            {this.props.listingData.map((img, idx) => {
              return <CarouselSliderItem key={idx}>
                  <img
                    ref={this.inputRef}
                    onClick={this.handleCarouselClick.bind(this)}
                    id={img.sequence_id}
                    className={`seq-${img.sequence_id}`}
                    src={img.image_url}
                    alt=''
                    key={`seq-id-${img.listing_id}`}
                    style={{ height: '100%', width: 'auto', borderRadius: '4px' }}
                  />
            </CarouselSliderItem>
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
