import React from 'react'
import UserinputUI from './UserinputUI'

class UserinputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            artist: "",
            genre: "Select a genre",
            rating: 3
        }
    }

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
            <UserinputUI
                state={this.state}
                changeHandler={this.changeHandler}
                addSongToPlaylist={this.props.addSongToPlaylist}
                addSongToDatabase={this.props.addSongToDatabase}
                sortHandler={this.sortHandler} />
        )
    }
}

export default UserinputContainer