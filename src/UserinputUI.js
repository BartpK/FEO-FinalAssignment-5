import React from 'react'

const UserinputUI = (props) => {
    return (
        <div className="userinputcontainer">
            <input type="text" name="title" placeholder="Song title" value={props.state.title} onChange={props.changeHandler} />
            <input type="text" name="artist" placeholder="Artist" value={props.state.artist} onChange={props.changeHandler} />
            <select name="genre" value={props.state.genre} onChange={props.changeHandler}>
                <option value="Select a genre" disabled>Select a genre</option>
                <option value="Rock">Rock</option>
                <option value="HipHop">HipHop</option>
                <option value="Metal">Metal</option>
                <option value="Classics">Classics</option>
            </select>
            <div className="ratinginputcontainer">
                <span>Rating:</span><input className="ratingslider" type="range" min="1" max="5" name="rating" value={props.state.rating} onChange={props.changeHandler} />
                <span>{props.state.rating}/5</span>
            </div>
            <button onClick={() => { props.addSongToPlaylist(props.state); props.addSongToDatabase(props.state) }}>Add song</button>
            <select defaultValue="Sort by..." onChange={(e) => { props.sortHandler(e) }}>
                <option disabled>Sort by...</option>
                <option value="artistasc">Artist A-Z</option>
                <option value="artistdsc">Artist Z-A</option>
                <option value="titleasc">Title A-Z</option>
                <option value="titledsc">Title Z-A</option>
                <option value="ratingasc">Rating low-high</option>
                <option value="ratingdsc">Rating high-low</option>
            </select>
        </div >
    )
}

export default UserinputUI