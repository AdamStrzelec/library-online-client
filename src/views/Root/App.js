import React from 'react';
import './App.css';
import AppContext from '../../context';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowAltCircleLeft, faArrowAltCircleRight, faUser, faUserCog, faSortDown} from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header/Header';

library.add(faArrowAltCircleLeft, faArrowAltCircleRight, faUser, faUserCog, faSortDown)

class App extends React.Component {

  state = {
    user: {
      userName: 'adastr96',
      firstName: 'Adam',
      lastName: 'Strzelec',
      userStatus: 'admin'
    },
    userStatus: 'logged',
  }

  render(){
    return (
      
      <div className="App">
        <AppContext.Provider value={this.state}>
          <Header />
          <h1>hello</h1>
        </AppContext.Provider>
      </div>

    );
  }
}

export default App;
