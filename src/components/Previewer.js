import React from 'react'
import styled from 'styled-components'
import {  MarkdownPreview  } from 'react-marked-markdown';


const StyledPreviewer = styled.div`
  font-size: 13px;  
  height: 80vh;
  .PreviewHead {
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
    color: #3A3A3A;
  }
`;

function Previewer({ value }) {
  return (
    <StyledPreviewer>
      <h1 className='PreviewHead'>Preview: </h1>
      <MarkdownPreview value={value} />
    </StyledPreviewer>
  )
}

export default Previewer

// @media only screen and (max-width: 835px) {
//   div {
//     height: 80vh !important;
//     width: 100%;
//   }
// }