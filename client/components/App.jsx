import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from './Image.jsx';

const Wrapper = styled.div`
  border: 1px solid black;
  float:left;
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
      <Wrapper>
        <Image listingData={ this.state.listingData } />
      </Wrapper>
    );
  }
}

export default App;
