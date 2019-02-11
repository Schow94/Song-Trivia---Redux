import React from 'react';
import {selectSong} from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
  return (
    <div style={{fontFamily: 'Roboto'}}>
      <div style={{backgroundColor:'#edeff2', padding: '10px'}}>
        <h1 style={{fontFamily: 'Roboto', textAlign: 'center', color: 'black'}}>Song Trivia</h1>
      </div>
      <div style={{padding: '20px', margin: '100px 0 100px 0', paddingTop: '30px', backgroundColor: '#e3ecfc'}} className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div style={{textAlign:'center'}} className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;