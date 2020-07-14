import React from 'react'

const Playlist = (props) => {

    const songsToDisplay = props.songs.map(song => {
        { console.log(song) }
        return (
            <tr key={song.title}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.rating}/5</td>
            </tr>
        )
    });
    console.log(songsToDisplay)
    return (
        <div>

            <table className="playlisttable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {songsToDisplay}
                </tbody>
            </table>

        </div>
    )
}

export default Playlist