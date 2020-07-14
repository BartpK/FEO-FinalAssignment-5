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
                <input type="text" name="title" placeholder="Song title" value={this.state.title} onChange={this.changeHandler} />
                <input type="text" name="artist" placeholder="Artist" value={this.state.artist} onChange={this.changeHandler} />
                <select name="genre" value={this.state.genre} onChange={this.changeHandler}>
                    <option value="Select a genre" disabled>Select a genre</option>
                    <option value="Rock">Rock</option>
                    <option value="HipHop">HipHop</option>
                    <option value="Metal">Metal</option>
                    <option value="Classics">Classics</option>
                </select>
                <div className="ratinginputcontainer">
                    <span>Rating:</span><input className="ratingslider" type="range" min="1" max="5" name="rating" value={this.state.rating} onChange={this.changeHandler} />
                    <span>{this.state.rating}/5</span>
                </div>
                <button onClick={() => { this.props.addSongToPlaylist(this.state); this.props.addSongToDatabase(this.state) }}>Add song</button>
                <select defaultValue="Sort by..." onChange={(e) => { this.sortHandler(e) }}>
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
}

export default Userinput