import React from 'react'

class Userinput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            artist: "",
            genre: "Select a genre",
            rating: 3
        }
    }
    //Methods go below this line
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sortHandler = (e) => {
        switch (e.target.value) {
            case "artistasc":
                this.props.sortPlaylist("artist", "asc")
                break
            case "artistdsc":
                this.props.sortPlaylist("artist", "dsc")
                break
            case "titleasc":
                this.props.sortPlaylist("title", "asc")
                break
            case "titledsc":
                this.props.sortPlaylist("title", "dsc")
                break
            case "ratingasc":
                this.props.sortPlaylist("rating", "asc")
                break
            case "ratingdsc":
                this.props.sortPlaylist("rating", "dsc")
                break
            default:
        }

    }


    render() {

        return (
            <div className="userinputcontainer">
                <h1>Header for userinput</h1>
                <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                <input type="text" name="artist" value={this.state.artist} onChange={this.changeHandler} />
                <select name="genre" value={this.state.genre} onChange={this.changeHandler}>
                    <option value="Select a genre" disabled>Select a genre</option>
                    <option value="Rock">Rock</option>
                    <option value="HipHop">HipHop</option>
                    <option value="Metal">Metal</option>
                    <option value="Classics">Classics</option>
                </select>
                <input type="range" min="1" max="5" name="rating" value={this.state.rating} onChange={this.changeHandler} />
                <button onClick={() => { this.props.addSongToPlaylist(this.state); this.props.addSongToDatabase(this.state) }}>Add song</button>
                <select defaultValue="Sort by..." onChange={(e) => { this.sortHandler(e) }}>
                    <option disabled>Sort by...</option>
                    <option value="artistasc">Artist A-Z</option>
                    <option value="artistdsc">Artist Z-A</option>
                    <option value="titleasc">Title A-Z</option>
                    <option value="titledsc">Title Z-A</option>
                    <option value="ratingasc">Rating 1-5</option>
                    <option value="ratingdsc">Rating 5-1</option>
                </select>
                <button onClick={this.props.clearPlaylistHandler}>Clear playlist</button>
            </div>
        )
    }
}

export default Userinput