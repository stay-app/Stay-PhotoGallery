import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');

    this.seqId = this.props.clickedImageObj.sequence_id;
    this.imgUrl = this.props.clickedImageObj.image_url;
    this.imgCaption = this.props.clickedImageObj.caption;
  }

  render() {
    if (this.props.clickedImageObj) {
      return (
        <div>
          {this.imgCaption}
          <p>{this.seqId}/{this.props.listingData.length + 1}</p>
          {this.props.listingData.map((img) => {
            return <img src={img.image_url} alt={img.sequence_id} key={img.sequence_id}/>
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
