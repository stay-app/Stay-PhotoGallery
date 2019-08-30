import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;
  max-height: 442px;
`;

const LeftHalf = styled.div`
  border: 1px solid #484848;
  float: left;
  background-image: url('${(props) => props.imgObj}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  grid-template-rows: 419px;
  transition: -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  /* opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s */

  &:hover {
    transform: scale(1.05);
  }
`;

const RightHalf = styled.div`
  border: 1px solid #484848;
  display: grid;
  float: right;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  overflow: hidden;
  width: 100%;
  max-height: 419px;
`;

const QuadrantWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  /* opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s */

  &:hover {
    transform: scale(1.05);
  }
`;

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedImageUrl: '',
    }
    this.inputRef = React.createRef();
  }

  handleImageClick(e) {
    const clickedImageObj = this.props.listingData.filter((v) => v.sequence_id === Number(e.target.id))[0];
    const clickedImageSeq = clickedImageObj.sequence_id;
    const clickedImageUrl = clickedImageObj.image_url;
    this.setState({ clickedImageUrl: clickedImageUrl });
    this.props.changeClickedObj(clickedImageObj);
    this.props.handleOpenModal(clickedImageSeq);
  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <Wrapper>
            <LeftHalf
              id={this.props.listingData[0].sequence_id}
              className={`seq-${this.props.listingData[0].sequence_id}`}
              imgObj={this.props.listingData[0].image_url}
              style={{cursor: "pointer"}}
              onClick={this.handleImageClick.bind(this)}
              ref={this.inputRef}
              onMouseEnter={() => {console.log(this.inputRef.current)}}
            />
            <RightHalf
              onClick={this.handleImageClick.bind(this)}
              onmouseover=""
              style={{cursor: "pointer"}}
            >
              <QuadrantWrapper>
                <img
                  id={this.props.listingData[1].sequence_id}
                  src={this.props.listingData[1].image_url}
                  alt={this.props.listingData[1].caption}
                  style={{ maxWidth: '105%', maxHeight: 'auto' }}
                />
              </QuadrantWrapper>
              <QuadrantWrapper>
                <img
                  id={this.props.listingData[2].sequence_id}
                  src={this.props.listingData[2].image_url}
                  alt={this.props.listingData[2].caption}
                  style={{ maxWidth: '105%', maxHeight: 'auto' }}
                />
              </QuadrantWrapper>
              <QuadrantWrapper>
                <img
                  id={this.props.listingData[3].sequence_id}
                  src={this.props.listingData[3].image_url}
                  alt={this.props.listingData[3].caption}
                  style={{ maxWidth: '105%', maxHeight: 'auto' }}
                />
              </QuadrantWrapper>
              <QuadrantWrapper>
                <img
                  id={this.props.listingData[4].sequence_id}
                  src={this.props.listingData[4].image_url}
                  alt={this.props.listingData[4].caption}
                  style={{ maxWidth: '105%', maxHeight: 'auto' }}
                />
              </QuadrantWrapper>
            </RightHalf>
        </Wrapper>
      )
    } else {
      return <div className='image-container'>Loading...</div>
    }
  }
}

export default Image;
