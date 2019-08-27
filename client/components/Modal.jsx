import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';

// const ModalContent = styled.div`
//   margin: 15% auto; /* 15% from top + centered */
//   padding: 20px;
//   border: 1px solid red;
//   width: 80%;
// `;

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
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '300px',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
        >
          {this.props.children}
          <button onClick={this.props.handleCloseModal}>Close</button>
        </div>
      </div>,
      this.el,
    );
  }
}

export default Modal;
