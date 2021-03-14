import React from 'react';
import ReactDOM from 'react-dom';
import Main-content from './Main-content';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main-content />, div);
  ReactDOM.unmountComponentAtNode(div);
});