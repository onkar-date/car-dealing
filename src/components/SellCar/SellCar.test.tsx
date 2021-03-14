import React from 'react';
import ReactDOM from 'react-dom';
import SellCar from './SellCar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SellCar />, div);
  ReactDOM.unmountComponentAtNode(div);
});