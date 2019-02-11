import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
  // console.log(props);
  if (!song){
    return <div>Select a song</div>
  }
  return(
    <div>
      <h3>Details for: </h3>
      <p>
        <img style={{display:'inline', paddingBottom: '10px'}} alt='TLC' className="ui image medium" src={song.image}></img>
        <br></br>
        <strong>Title:</strong> {song.title}
        <br></br>
        <strong>Artist:</strong> {song.artist}
        <br></br>
        <strong>Duration:</strong> {song.duration}
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href={song.listen}>LISTEN HERE</a>
        <br></br>
        <strong>Background:</strong> {song.description}
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  //selectedSong is our selectedSongReducer which returns the currently selected song
  return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);
