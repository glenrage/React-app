import React from 'react';

const MyTitle = function (props) {
  return (
    <div>
      <h2 style={ { color:props.color}} > {props.title}</h2>
    </div>
  );
};


export default MyTitle;
