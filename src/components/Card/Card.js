import React from 'react';

const Card = (props) => {
  const { title, taka } = props.card
  return (
    <div>
      <div>
        <div class="card m-1" style={{ width: '15rem' }}>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <button type="button" class="btn btn-primary">BUY NOW</button>
            <p class="card-text">{taka}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;