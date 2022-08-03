import React from 'react';
import './style.less';
import { ComposeHeart } from './components';
import { customMusic } from './assets';

const App = () => {
  const onClick = () => {
    let myAuto = document.getElementById('myaudio');
    myAuto.play();
  };

  return (
    <div className="pageContainer" onClick={onClick}>
      <video id="myaudio" src={customMusic} controls="controls" hidden loop={false} muted={false} />
      <ComposeHeart />
    </div>
  );
};

export default App;
