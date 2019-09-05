import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import Image from './Image.jsx';
import Modal from './Modal.jsx';

const Wrapper = styled.div`
  border: 0.5px solid #484848;
  float: left;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: -8px;
  overflow: hidden;
`;

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: [],
      showModal: false,
      clickedImageObj: {},
    };
  }

  componentDidMount() {
    window.handleBackClick = this.handleBackClick.bind(this);
    window.handleNextClick = this.handleNextClick.bind(this);
    window.handleCloseModal = this.handleCloseModal.bind(this);
    window.addEventListener('keydown', this.handleKeyShortcuts);
    axios.get('/api/images/100')
      .then((data) => this.setState({ listingData: data.data }))
      .catch((err) => console.log(err));
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

  handleBackClick() {
    const currSeqId = this.state.clickedImageObj.sequence_id;
    let prevImgSeqId = currSeqId - 1;
    prevImgSeqId = prevImgSeqId > 0 ? prevImgSeqId : null;
    if (prevImgSeqId) {
      const prevImgObj = this.state.listingData.filter((img) => img.sequence_id === prevImgSeqId)[0];
      this.changeClickedObj(prevImgObj);
    }
  }

  handleNextClick() {
    const currSeqId = this.state.clickedImageObj.sequence_id;
    let nextImgSeqId = currSeqId + 1;
    nextImgSeqId = nextImgSeqId < this.state.listingData.length + 1 ? nextImgSeqId : null;
    if (nextImgSeqId) {
      const nextImgObj = this.state.listingData.filter((img) => img.sequence_id === nextImgSeqId)[0];
      this.changeClickedObj(nextImgObj);
    }
  }

  handleKeyShortcuts(e) {
    switch (e.which) {
      case 37: // leftArrow
        this.handleBackClick();
        break;
      case 39: // rightArrow
        this.handleNextClick();
        break;
      case 27: // esc
        this.handleCloseModal();
        break;
      default:
    }
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
            listingData={this.state.listingData}
            clickedImageObj={this.state.clickedImageObj}
            handleCloseModal={this.handleCloseModal.bind(this)}
            changeClickedObj={this.changeClickedObj.bind(this)}
            handleBackClick={this.handleBackClick.bind(this)}
            handleNextClick={this.handleNextClick.bind(this)}
          />
        ) : null }
      </Wrapper>
    );
  }
}

export default PhotoGallery;
