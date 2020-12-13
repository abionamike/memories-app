import React from 'react';

const Card = ({ memory }) => {
  const tags = memory.tags.split(',');

  return (
    // <Paper className={classes.paper} elevation={3} />
    <div className="card">
      <div style={{ backgroundImage: './img/hero-program-blurr2.jpg' }} className="image">
        <div className="image-text">
          <div className="name-time"></div>
          <div className="edit-icon"></div>
        </div>
      </div>
      <div className="description">
        <small>
          {tags.map(tag => (
            `#${tag}`
          ))}
          #explore #kayaking
        </small>
        <h3>Visited the Escape room</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, cupiditate!</p>
        <div className="icons">
          <div className="like">Like 9</div>
          <div className="delete">Delete</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
