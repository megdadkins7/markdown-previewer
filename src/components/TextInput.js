import React from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.div`
  .InputHead {
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
    color: #3A3A3A;
  }
  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: vertical !important
    overflow: auto
    height: 80vh !important
    width: 500px;
    border-radius: 5px;
    padding: 5px;
  }
`;

function TextInput({ value, onChange }) {
  return (
    <StyledTextInput>
      <h1 className='InputHead'>Input: </h1>
      <textarea id='editor' type='text' value={value} onChange={onChange}>
      </textarea>
    </StyledTextInput>
  )
}

export default TextInput

// @media only screen and (max-width: 835px) {
//   textarea {
//     height: 80vh !important;
//     width: 100%;
//   }
// }