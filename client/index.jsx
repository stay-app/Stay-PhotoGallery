import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  helloWorld() {
    return "Hello world!!!";
  }

  render() {
    return <div>hello world</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;