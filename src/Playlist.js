import React from 'react'

const Playlist = (props) => {
    if (props.loading) {
        return (
            <h2>loading...</h2>
        )
    } else {
        const songsToDisplay = props.songs.map(song => {

            return (
                <tr key={song.title}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}/5</td>
                    <td onClick={() => { props.removeSongFromDatabase([song.id]); props.removeSongFromPlaylist([song.id]) }}>Delete</td>
                </tr>
            )
        });
        return (
            <div>

                <table className="playlisttable">
                    <thead>
                        <tr>
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

            </div>
        )
    }
}

export default Playlist