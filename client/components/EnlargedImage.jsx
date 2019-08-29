import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import back from '../assets/back.svg';

const MainImage = styled.div`
  /* height: 788px;
  width: 525px;
  padding: 40px;
  verticalAlign: middle; */
`;

class EnlargedImage extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  handleBackClick() {
    let currSeqId = this.props.clickedImageObj.sequence_id;
    let prevImgSeqId = currSeqId - 1;
    prevImgSeqId = prevImgSeqId > 0 ? prevImgSeqId : null;
    if (prevImgSeqId) {
      const prevImgObj = this.props.listingData.filter((img) => img.sequence_id === prevImgSeqId)[0];
      this.props.changeClickedObj(prevImgObj);
    }
  }

  handleNextClick() {
    let currSeqId = this.props.clickedImageObj.sequence_id;
    let nextImgSeqId = currSeqId + 1;
    nextImgSeqId = nextImgSeqId < this.props.listingData.length + 1 ? nextImgSeqId : null;
    if (nextImgSeqId) {
      const nextImgObj = this.props.listingData.filter((img) => img.sequence_id === nextImgSeqId)[0];
      this.props.changeClickedObj(nextImgObj);
    }
  }

  render() {
    return (
      <MainImage>
        {this.props.children}
        <button onClick={this.handleBackClick.bind(this)}>BACK</button>
        <button onClick={this.handleNextClick.bind(this)}>NEXT</button>
      </MainImage>
    );
  }
}

export default EnlargedImage;
