import React from 'react';
// import styled from 'styled-components';

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;
`;

const LeftHalf = styled.div`
  border: 1px solid #484848;
  float: left;
  background-image: url('${(props) => props.imgObj}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 100%;
  max-height: 416px;
  cursor: pointer;
  transition: -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, filter 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const RightHalf = styled.div`
  display: grid;
  float: right;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  overflow: hidden;
  width: 100%;
  max-height: 419px;
  cursor: pointer;
`;

const QuadrantWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, filter 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const QuadrantImage = styled.img`
  border: 1px solid #484848;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: -webkit-transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, filter 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const LeftHalfImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  ${QuadrantImage}:hover & {
    filter: brightness(75%);
  }
`;

const ViewButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  display: inline-block;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
  width: 113.78px;
  height: 36px;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  right: 1%;
  top: 45%;
  cursor: pointer;
  display: flex;
  font-family: Helvetica Neue;
  font-size: 15px;
  align-items: center;
  justify-content: center;
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

  handleHover() {
    this.inputRef.current.setAttribute('class', 'HOVERED');
    // loop thru all img tags and set class NOT-HOVERED for imgs tht dont have id HOVERED
    const hovered = document.getElementsByClassName('HOVERED')[0];
    hovered.setAttribute('filter', 'brightness(75%)');
    // css selector for everything but id hovered to lower brightness
  }

  viewPhotoButton() {
    this.props.changeClickedObj(this.props.listingData[0]);
    this.props.handleOpenModal(this.props.listingData[0].sequence_id);
  }

  render() {
    if (this.props.listingData.length > 0) {
      return (
        <Wrapper>
            <ViewButtonWrapper onClick={this.viewPhotoButton.bind(this)}>View Photos</ViewButtonWrapper>
            <LeftHalf onClick={this.handleImageClick.bind(this)} className={`seq-${this.props.listingData[0].sequence_id}`} ref={this.inputRef}>
              <LeftHalfImage id={this.props.listingData[0].sequence_id} src={this.props.listingData[0].image_url} alt=''/>
            </LeftHalf>
            <RightHalf onClick={this.handleImageClick.bind(this)}>
              <QuadrantWrapper>
                <QuadrantImage id={this.props.listingData[1].sequence_id} src={this.props.listingData[1].image_url} alt=''/>
              </QuadrantWrapper>
              <QuadrantWrapper>
                <QuadrantImage id={this.props.listingData[2].sequence_id} src={this.props.listingData[2].image_url} alt=''/>
              </QuadrantWrapper>
              <QuadrantWrapper>
                <QuadrantImage id={this.props.listingData[3].sequence_id} src={this.props.listingData[3].image_url} alt=''/>
              </QuadrantWrapper>
              <QuadrantWrapper>
                <QuadrantImage id={this.props.listingData[4].sequence_id} src={this.props.listingData[4].image_url} alt=''/>
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
