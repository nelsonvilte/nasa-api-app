import React from 'react';

const Search = () => {
    return (
        <form
        className='d-flex'
        style={{ maxWidth: '25em', margin: '16px auto' }}
      >
        <input
          className='form-control me-2'
          type='search'
          placeholder='Buscar por'
          name='word'
        />
        <button className='btn btn-outline-success' type='submit'>
          Buscar
        </button>
      </form>
  
    );
};

export default Search;