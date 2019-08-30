import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: block;
  margin: 0;
  margin-bottom: 32px;
`;

const CarouselImageButtonsWrapper = styled.ul`
  width: '100%';
  float: right;
  transition: transform 0.3s ease-out 0s !important;
`;

const CarouselImageButtons = styled.li`
  display: list-item;
  float: left;
  list-style-type: none;
  overflow: hidden;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  border: none;
  outline: none
  background-color: transparent;
  cursor: pointer;
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
          <button onClick={this.props.handleCloseModal}>X</button>
          <CarouselImageButtonsWrapper>
          {this.props.listingData.map((img, idx) => {
            return (
              <CarouselImageButtonsWrapper className="carousel" key={idx}>
                  <CarouselImageButtons onClick={this.handleCarouselClick.bind(this)}>
                    <img
                      id={img.sequence_id}
                      className={`seq-${img.sequence_id}`}
                      src={img.image_url}
                      alt=''
                      key={`seq-id-${img.listing_id}`}
                      style={{ height: '100%', width: 'auto', borderRadius: '4px' }}
                    />
                  </CarouselImageButtons>
              </CarouselImageButtonsWrapper>
            );
          })}
          </CarouselImageButtonsWrapper>
          <p id='img-totals'>{this.props.clickedImageObj.sequence_id}/{this.props.listingData.length}</p>
          <p id='img-caption'>{this.props.clickedImageObj.caption}</p>
        </CarouselWrapper>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
