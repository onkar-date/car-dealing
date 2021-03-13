import React from 'react';
import ReactDOM from 'react-dom';
import Topnav from './Topnav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Topnav />, div);
  ReactDOM.unmountComponentAtNode(div);
});