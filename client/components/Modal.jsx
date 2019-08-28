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
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        onClick={this.props.handleCloseModal}
      >
        <div
          className="modal-container"
          style={{
            background: '#fff',
            display: 'inline-block',
            position: 'fixed',
            width: '100%',
            height: '100%',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
        >
            <EnlargedImage>{this.props.children}</EnlargedImage>
            <Carousel/>
        </div>
      </div>,
      this.el,
    );
  }
}

export default Modal;
