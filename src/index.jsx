import React from 'react';
import {createRoot} from 'react-dom/client';

import MainView from './components/main-view/main-view';

//import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will everntually use all others)
class MovieClientApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0];
const root = createRoot(container);

//Tells React to render your app in the root of the DOM element
root.render(React.createElement(MovieClientApplication));
