import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from './Image.jsx';
import Modal from './Modal.jsx';

const Wrapper = styled.div`
  border: 1px solid black;
  float: left;
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
  handleOpenModal(clickedUrl) { this.setState({ showModal: true, clickedImageUrl: clickedUrl }) }

  handleCloseModal() { this.setState({showModal: false}) }

  render() {
    return (
      <Wrapper>
        <Image
          listingData={this.state.listingData}
          handleOpenModal={this.handleOpenModal.bind(this)}
        />
        {this.state.showModal ? (
          <Modal
            handleCloseModal={this.handleCloseModal.bind(this)}>
            <img
              src={this.state.clickedImageUrl}
              alt="test"
              style={{ width: 'auto', height: '65vh', borderRadius: '16px' }}
            />
          </Modal>
        ) : null }
      </Wrapper>
    );
  }
}

export default App;
