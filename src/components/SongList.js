import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';



class SongList extends Component {
  renderList(){
    return this.props.songs.map((song) => {
      return (
        <div style={{padding:'10px 0 10px 0'}} className="item" key={song.title}>
          <div className="right floated content">
            <button 
              //calling our action creator here
              onClick={() => this.props.selectSong(song)}
              className="ui button primary">
                SELECT
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render(){
    // console.log(this.props);
    return (
      <div className="ui divided list">{this.renderList()}</div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  //songs is our songsReducer which returns a list of all of our songs
  return {songs: state.songs};
};


//connect dispatches our actions to the store
export default connect(mapStateToProps, {selectSong})(SongList);