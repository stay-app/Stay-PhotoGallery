import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MainImage from './MainImage.jsx';
import Carousel from './Carousel.jsx';

const ModalWrapper = styled.div`
  display: flex;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;;
  font-size: 16px;
  color: #484848;
  z-index: 2;
`;

const MainImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  z-index: 10;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  overflow-x: hidden;
`;

const ModalCloseButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 30px;
  margin-right: 30px;
`;

const ModalCloseButton = styled.button`
  padding: 32px;
  maring: -32px;
  border: none;
  background-color: transperant;
  outline: none;
  cursor: pointer;
`;

const root = document.getElementById('PhotoGallery');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    root.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalWrapper>
        <ModalCloseButtonWrapper>
          <ModalCloseButton onClick={this.props.handleCloseModal}>
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close"
              focusable="false"
              style={{ height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)' }}>
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
            </svg>
          </ModalCloseButton>
        </ModalCloseButtonWrapper>
        <MainImageWrapper>
          <MainImage
            clickedImageObj={this.props.clickedImageObj}
            listingData={this.props.listingData}
            changeClickedObj={this.props.changeClickedObj}
            handleBackClick={this.props.handleBackClick}
            handleNextClick={this.props.handleNextClick}
          />
        </MainImageWrapper>
        <CarouselWrapper>
          <Carousel
            listingData={this.props.listingData}
            clickedImageObj={this.props.clickedImageObj}
            changeClickedObj={this.props.changeClickedObj}
            handleCloseModal={this.props.handleCloseModal}
          />
        </CarouselWrapper>
      </ModalWrapper>,
      this.el,
    );
  }
}

export default Modal;
