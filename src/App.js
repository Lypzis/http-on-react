import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'; 

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //enables React DOM :D, for routing throughout all the app
      // <BrowserRouter basename="/my-app"> use this whenever the 'app' is in a subfolder,
      // otherwise defaults to "/"
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
