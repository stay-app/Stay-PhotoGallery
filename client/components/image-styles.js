import styled from 'styled-components';

export const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;
  overflow: auto;
  max-height: 442px;
`;

export const LeftHalf = styled.div`
  border: 1px solid red;
  float: left;
  background-image: url('${(props) => props.imgObj}');
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 50vw;
`;

export const RightHalf = styled.div`
  border: 1px solid blue;
  float: right;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  overflow: auto;
  width: 100%;
  height: auto;
`;