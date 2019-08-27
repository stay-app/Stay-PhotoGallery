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
  handleOpenModal() {this.setState({showModal: true})}

  handleCloseModal() {this.setState({showModal: false})}

  render() {
    return (
      <Wrapper>
        <Image listingData={ this.state.listingData } />
        <Button onClick={this.handleOpenModal.bind(this)}> Show Modal?</Button>
        {this.state.showModal ? (
          <Modal
            // open={this.state.showModal}
            handleCloseModal={this.handleCloseModal.bind(this)}>
            Hello from the modal
          </Modal>
        ) : null }
      </Wrapper>
    );
  }
}

export default App;
