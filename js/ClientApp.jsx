import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom'

const ce = React.createElement;

const MyTitle = function (props) {
  return (
    ce('div', {id:'my-first-component'},
      ce('h1',{style: {color: props.color}}, props.title)
    )
  );
};

const MyFirstComponent = function () {
  return (
    ce('div', {id:'my-first-component'},
    ce(MyTitle, {color: 'rebeccapurple', title: 'House of Cards'}),
ce(MyTitle, {color: 'peru', title: 'Orange is the New Black'}),
ce(MyTitle, {color: 'burlywood', title: 'Stranger Things'})
    )
  );
};

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById("app")
);
