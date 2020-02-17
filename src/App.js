import React from 'react';
import './App.css';
import SearchInput from "./components/SearchInput";
import SearchList from "./components/SearchList";
import Recent from "./components/Recent";
import Bookmarked from "./components/Bookmarked"
import Video from './components/Video';

function App() {
  return (
    <div className="main">
      <SearchInput/>
      <SearchList/>
      <div className="panel-main">
        <Video/>
        <div className="user-panel">
          <Recent/>
          <Bookmarked/>
        </div>
      </div>
    </div>
  );
}

export default App;


