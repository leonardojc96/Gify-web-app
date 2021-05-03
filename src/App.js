import React from 'react';
import './App.css';
import {Link, Route} from 'wouter';
import Home from './pages/Home';
import SearchResult from './pages/SearchResults';
import StaticContext from './contex/StaticContext'
import { GifsContextProvider } from './contex/GifsContex';
import Detail from './pages/Detail';

function App() {

  return (
    <StaticContext.Provider value ={{name:'leo'}}>

    <div className="App">
      <section className="App-content container-fluid">
        <GifsContextProvider>
        <Link to='/'>
          Home
        </Link>
        {/* <Link to='/gif/hamburguesas'>
          anvoguesas
        </Link> */}
        <div className='row justify-content-center'>
          {/* <div className='col-md-8 col-12'>
            <div className='row'> */}

          <Route className=''
            component = {SearchResult}
            path = '/search/:keyword'
            />
              
          <Route 
            component = {Home}
            path = '/'
            />
            {/* </div>
            </div> */}

            <Route 
            component = {Detail}
            path = '/gif/:id'
            />
            <Route 
            component = {Detail}
            path = '/search/gif/:id'
            />
        </div>
          </GifsContextProvider>
        {/* <ListOfGifs keyword = 'panda'/> */}
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
