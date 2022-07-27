import React from 'react';
import styled from 'styled-components'
import {IoSearch} from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-bottom: 0;
  
  @media(min-height: 767px) {
    margin-bottom: 1.5rem;
    width: 280px;
  }
`

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};

export default Search;