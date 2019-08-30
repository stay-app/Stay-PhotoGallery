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
  z-index: 2000;
`;

const MainImageWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
`;

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalWrapper>
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
