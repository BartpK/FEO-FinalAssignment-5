import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { syncData } from "./actions"
import songManager from './reducers/songmanager'
//End Redux


const Playlist = (props) => {


    //EXAMPLE HOW TO GET DATA:
    const reduxTesting = useSelector(state => state.songManager.songs)

    const reduxTestDisplay = reduxTesting.map(song => {
        return (
            <li style={{ color: "white" }}>{song.title}</li>
        )
    })



    if (props.loading) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        const songsToDisplay = props.songs.map(song => {
            return (
                <tr key={song.title}>
                    <td className="playbuttontd"><i className="fas fa-play-circle icon" onClick={() => { window.open("https://youtu.be/dQw4w9WgXcQ", "_blank") }}></i>
                    </td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}/5</td>
                    <td onClick={() => { props.removeSongFromDatabase([song.id]); props.removeSongFromPlaylist([song.id]) }}><i className="fas fa-times-circle icon"></i>

                    </td>
                </tr>
            )
        });

        return (
            <div>
                {reduxTestDisplay}
                <table className="playlisttable">
                    <thead>
                        <tr>
                            <th className="playbuttontd"></th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {songsToDisplay}
                    </tbody>
                </table>
                <button className="clearbutton" onClick={props.clearPlaylistHandler}>Clear playlist</button>
            </div>
        )
    }
}

export default Playlist