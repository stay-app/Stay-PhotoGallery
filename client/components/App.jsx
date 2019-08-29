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
      clickedImageObj: {},
    };
  }

  componentDidMount() {
    axios.get('/api/images/1')
      .then(data => this.setState({ listingData: data.data }))
      // .catch(err => console.log(err));
  }

  handleOpenModal(clickedImageSeqId) {
    const clickedImageObj = this.state.listingData.filter((v) => v.sequence_id === clickedImageSeqId)[0];
    this.changeClickedObj(clickedImageObj);
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  changeClickedObj(clickedImageObj) {
    this.setState({ clickedImageObj });
  }

  render() {
    return (
      <Wrapper>
        <Image
          listingData={this.state.listingData}
          handleOpenModal={this.handleOpenModal.bind(this)}
          changeClickedObj={this.changeClickedObj.bind(this)}
        />
        {this.state.showModal ? (
          <Modal
            // open={this.state.showModal}
            listingData={this.state.listingData}
            clickedImageObj={this.state.clickedImageObj}
            handleCloseModal={this.handleCloseModal.bind(this)}
            changeClickedObj={this.changeClickedObj.bind(this)}
          >
            <img
              src={this.state.clickedImageObj.image_url}
              alt={this.state.clickedImageObj.sequence_id}
              style={{ width: '65vh', height: 'auto', borderRadius: '16px' }}
            />
          </Modal>
        ) : null }
      </Wrapper>
    );
  }
}

export default App;
