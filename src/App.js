import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';

function App(){
  return(
  <div className='App'>
    <Router>  
      <Header/>
        <Switch>
        <Route path="/search/:searchTerm" component={SearchFeed}/>
        <Route path="/channel/:id" component={ChannelDetail}/>
        <Route path="/video/:id" component={VideoDetail}/>
        <Route path="/" component={Feed}/>
         
          
          
        </Switch>
    </Router>
  </div>
  );
}

export default App;
