import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageCarouselDiv = styled.div`
  width: '100%';
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
        <div>
          <p id='img-caption'>{this.props.clickedImageObj.caption}</p>
          <p id='img-totals'>{this.props.clickedImageObj.sequence_id}/{this.props.listingData.length}</p>
          {this.props.listingData.map((img, idx) => {
            return (
              <ImageCarouselDiv className="carousel" key={idx}>
                <ul className="carousel-list">
                  <li style={{  listStyleType: 'none', borderRadius: '4px' }}>
                    <button
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
                    </button>
                  </li>
                </ul>
              </ImageCarouselDiv>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
