import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from './Image.jsx';

const StyledImage = styled.div`
border: 5px solid red;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: [],
    };
  }

  componentDidMount() {
    axios.get('/api/images/1')
      .then(data => this.setState({ listingData: data.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StyledImage>
        <Image listingData={ this.state.listingData } />
      </StyledImage>
    );
  }
}

export default App;
