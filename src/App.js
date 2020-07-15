import React from 'react';
import './App.css';
import Container from "./Container"

//Below is needed to use redux inside component
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addSongToPlaylist } from "./actions"


function App() {
  //Testing redux
  const dispatch = useDispatch();



  //////////////////

  const songs = useSelector(state => state.songManager.songs)
  console.log("songs: ", songs)
  const songList = songs.map(song => {
    return (<li>{song.title}</li>)
  });



  return (
    <div className="App">
      <button onClick={() => dispatch(addSongToPlaylist({ title: "bla", artiste: "the blas" }))}>Add dummy song</button>
      {songList}
      <Container />
    </div>
  );
}

export default App;
//when done, make sure to add container back in here