import React from 'react';
import { sortCards } from '../actions/index';

export default (props) => {
  // console.log(props);
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};
