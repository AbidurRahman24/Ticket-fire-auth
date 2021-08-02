import React from 'react';

const Card = (props) => {
    const {title, taka} = props.card
    return (
        <div>
            <div class="card" style={{width: '15rem'}}>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <a href="/" class="btn btn-primary">Go somewhere</a>
    <p class="card-text">{taka}</p>
  </div>
</div>
        </div>
    );
};

export default Card;