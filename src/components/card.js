import React from 'react';

export default (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={props.image} />
    </div>
  );
};
