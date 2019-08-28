import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from './Image.jsx';
import Modal from './Modal.jsx';

const Wrapper = styled.div`
  border: 1px solid black;
  float:left;
`;

// const Modal = styled.div`
//   display: none; /* hidden by default */
//   position: fixed;
//   z-index: 1; /* sits on top */
//   width: 100%;
//   height: 100%;
//   background-color: white;
// `;

const Button = styled.button`
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: [],
      showModal: false,
      clickedImageUrl: '',
    };
  }

  componentDidMount() {
    axios.get('/api/images/1')
      .then(data => this.setState({ listingData: data.data }))
      .catch(err => console.log(err));
  }

  // toggleModal() {
  //   this.setState({ showModal: !this.state.showModal, });
  // }
  handleOpenModal(clickedUrl) {
    this.setState({ showModal: true, clickedImageUrl: clickedUrl });
  }

  handleCloseModal() {this.setState({showModal: false})}

  render() {
    return (
      <Wrapper>
        <Image
          listingData={this.state.listingData}
          handleOpenModal={this.handleOpenModal.bind(this)}
        />
        {this.state.showModal ? (
          <Modal
            // open={this.state.showModal}
            handleCloseModal={this.handleCloseModal.bind(this)}>
            <img src={this.state.clickedImageUrl} alt='lol'/>
          </Modal>
        ) : null }
      </Wrapper>
    );
  }
}

export default App;
