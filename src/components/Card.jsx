import React from 'react';

const Card = () => {
    return (
        <div className='col mb-3'>
        <div className='card h-100'>
          <div style={{ maxHeight: '17em' }}>
            <img
              src='https://1.bp.blogspot.com/-VTUqbWSBbpo/X-wXsqR9V3I/AAAAAAAAElo/2iMwmkXDDhkSF8qbRoPRZZyMjVgcJhJXQCLcBGAsYHQ/w640-h320/Encabezado%2Bde%2Bblog%2B1200x600%2Bpx.png'
              className='card-img-top img-fluid'
              alt='...'
              style={{ maxHeight: '100%' }}
            />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Titulo 1</h5>
            <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus, molestiae quaerat fuga accusantium mollitia provident fugiat, quae necessitatibus ducimus sint quo modi ea distinctio ullam accusamus aspernatur cupiditate ipsam.</p>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Ver mas</small>
          </div>
        </div>
      </div>
  
    );
};

export default Card;