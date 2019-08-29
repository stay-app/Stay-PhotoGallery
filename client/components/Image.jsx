import React from 'react';
import {
  Wrapper,
  LeftHalf,
  RightHalf,
} from './image-styles.js';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedImageUrl: '',
    }
  }

  handleImageClick(e) {
    const clickedImageObj = this.props.listingData.filter((v) => v.sequence_id === Number(e.target.id))[0];
    const clickedImageSeq = clickedImageObj.sequence_id;
    const clickedImageUrl = clickedImageObj.image_url;
    this.setState({ clickedImageUrl: clickedImageUrl });
    this.props.changeClickedObj(clickedImageObj);
    this.props.handleOpenModal(clickedImageSeq);
  }

  handleImageHover() {
    // do something
  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <Wrapper>
          <LeftHalf
            id={this.props.listingData[0].sequence_id}
            className={`seq-${this.props.listingData[0].sequence_id}`}
            imgObj={this.props.listingData[0].image_url}
            onClick={this.handleImageClick.bind(this)}
            onmouseover=""
            style={{cursor: "pointer"}}
          />
          <RightHalf
            onClick={this.handleImageClick.bind(this)}
            onmouseover=""
            style={{cursor: "pointer"}}
          >
            <img
              id={this.props.listingData[1].sequence_id}
              src={this.props.listingData[1].image_url}
              alt={this.props.listingData[1].caption}
            />
            <img
              id={this.props.listingData[2].sequence_id}
              src={this.props.listingData[2].image_url}
              alt={this.props.listingData[2].caption}
            />
            <img
              id={this.props.listingData[3].sequence_id}
              src={this.props.listingData[3].image_url}
              alt={this.props.listingData[3].caption}
            />
            <img
              id={this.props.listingData[4].sequence_id}
              src={this.props.listingData[4].image_url}
              alt={this.props.listingData[4].caption}
            />
          </RightHalf>
        </Wrapper>
      )
    } else {
      return <div className='image-container'>Loading...</div>
    }
  }
}

export default Image;
