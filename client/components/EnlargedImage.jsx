import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const MainImage = styled.div`
  height: 788px;
  width: 525px;
  padding: 40px;
  verticalAlign: middle;
`;

class EnlargedImage extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  render() {
    return <MainImage>{this.props.children}</MainImage>;
  }
}

export default EnlargedImage;
