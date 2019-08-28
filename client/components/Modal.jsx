import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EnlargedImage from './EnlargedImage.jsx';
import Carousel from './Carousel.jsx';

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
      <div
        className="modal-container"
        style={{
          background: '#fff',
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
      >
          <EnlargedImage>{this.props.children}</EnlargedImage>
          <Carousel/>
      </div>,
      this.el,
    );
  }
}

export default Modal;
