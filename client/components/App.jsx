import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';

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
    // return <div>{JSON.stringify(this.state)}</div>
    return (
      <Image listingData={ this.state.listingData } />
    );
  }
}

export default App;
