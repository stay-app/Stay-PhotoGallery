import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  position: relative;
  top: 10%;
  height: 643px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const PrevButtonWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const PrevButton = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: 100%;
`;

const NextButtonWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const NextButton = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: 100%;
`;

const MainImageDiv = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: 75%;
  width: 75%;
  align-items: center;
  justify-content: center;
`;

class MainImage extends React.Component {
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
      <MainDiv>
        <PrevButtonWrapper>
          <PrevButton>
            <div className='prev' onClick={this.handleBackClick.bind(this)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px'}}>P</div>
          </PrevButton>
        </PrevButtonWrapper>
        <MainImageDiv>
          <img src={this.props.clickedImageObj.image_url} alt='' style={{ width: '100%', height: '100%', borderRadius: '16px' }}/>
        </MainImageDiv>
        <NextButtonWrapper>
          <NextButton>
            <div className='next' onClick={this.handleNextClick.bind(this)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px'}}>N</div>
          </NextButton>
        </NextButtonWrapper>
      </MainDiv>
    );
  }
}

export default MainImage;
