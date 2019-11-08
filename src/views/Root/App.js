import React from 'react';
import Header from '../../components/Header/Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare, faFacebookF, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';

library.add(faArrowAltCircleLeft, faArrowAltCircleRight, faTwitterSquare, faFacebookF, faYoutubeSquare)

class App extends React.Component {


  render(){
    return (
      <div className="App">
        <Header />
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
