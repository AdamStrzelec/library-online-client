import React from 'react';
import Header from '../../components/Header/Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowAltCircleLeft, faArrowAltCircleRight)

class App extends React.Component {


  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
