import React from 'react'
import { useSelector } from 'react-redux'

const Playlist = (props) => {

    const songsFromStore = useSelector(state => state.songManager.songs)
    const isLoading = useSelector(state => state.isLoading)

    if (isLoading) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        const songsToDisplay = songsFromStore.map(song => {
            return (
                <tr key={song.title + " " + song.artist}>
                    <td className="playbuttontd"><i className="fas fa-play-circle icon" onClick={() => { window.open(`https://www.youtube.com/results?search_query=${song.artist} ${song.title}`, "_blank") }}></i>
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