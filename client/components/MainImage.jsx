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
  background-color: white;
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

const MainImageElement = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  render() {
    return (
      <MainDiv>
        <PrevButtonWrapper>
          <PrevButton>
            <div className='prev' onClick={this.props.handleBackClick} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginRight: '38px'}}>
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}>
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
            </svg>
            </div>
          </PrevButton>
        </PrevButtonWrapper>
        <MainImageDiv>
          <MainImageElement src={this.props.clickedImageObj.image_url} alt='' onClick={this.props.handleNextClick}/>
        </MainImageDiv>
        <NextButtonWrapper>
          <NextButton>
            <div className='next' onClick={this.props.handleNextClick} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginLeft: '38px'}}>
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}>
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
              </svg>
            </div>
          </NextButton>
        </NextButtonWrapper>
      </MainDiv>
    );
  }
}

export default MainImage;
