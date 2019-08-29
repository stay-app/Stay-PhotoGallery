import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageCarouselDiv = styled.div`
  width: '100%';
  float: right;
`;

const CarouselContainerDiv = styled.div`
  display: block;
  margin: 0;
`;

const CarouselImageButtons = styled.button`
  display: block;
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
        <CarouselContainerDiv>
          <button onClick={this.props.handleCloseModal}>X</button>
          <ul className="carousel-list">
          {this.props.listingData.map((img, idx) => {
            return (
              <ImageCarouselDiv className="carousel" key={idx}>
                <li style={{ listStyleType: 'none', borderRadius: '4px' }}>
                  <CarouselImageButtons
                    onClick={this.handleCarouselClick.bind(this)}
                    style={{ width: '64px', height: '64px', border: 'none', backgroundColor: 'transparent', outline: 'none', cursor: "pointer" }}
                  >
                    <img
                      id={img.sequence_id}
                      className={`seq-${img.sequence_id}`}
                      src={img.image_url}
                      alt={img.sequence_id}
                      key={`seq-id-${img.listing_id}`}
                      style={{ height: '100%', width: 'auto' }}
                    />
                  </CarouselImageButtons>
                </li>
              </ImageCarouselDiv>
            );
          })}
          </ul>
          <p id='img-totals'>{this.props.clickedImageObj.sequence_id}/{this.props.listingData.length}</p>
          <p id='img-caption'>{this.props.clickedImageObj.caption}</p>
        </CarouselContainerDiv>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
