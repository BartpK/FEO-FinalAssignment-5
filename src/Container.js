import React from 'react'

import Userinput from './Userinput';
import Playlist from './Playlist'

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            songs: [
                {
                    title: 'Never gonna give you up',
                    artist: 'Rick Astley',
                    genre: '80s',
                    rating: 5
                },
                {
                    title: 'Welcome to the jungle',
                    artist: 'Guns N Roses',
                    genre: 'Rock',
                    rating: 2
                },
                {
                    title: 'Ghost ship of cannibal rats',
                    artist: 'Billy Talent',
                    genre: 'Rock',
                    rating: 4
                },
                {
                    title: 'Rooster',
                    artist: 'Alice in Chains',
                    genre: 'Rock',
                    rating: 5
                },
                {
                    title: 'Freak on a leash',
                    artist: 'Korn',
                    genre: 'Rock',
                    rating: 3
                }
            ]
        }
    }
    //Methods go below this line
    addSongToPlaylist = (songObject) => {
        if (songObject.title !== "" && songObject.artist !== "" && songObject.genre !== "Select a genre") {
            this.setState(state => {
                const newSongArray = state.songs.concat(songObject);
                return { songs: newSongArray };
            })
        }
    }

    sortPlaylist = (property, direction) => {
        if (direction === "asc") {
            const sortedSongsArray = this.state.songs.sort((a, b) => (a[property] > b[property]) ? 1 : -1)

            this.setState({ songs: sortedSongsArray })
        } else {
            const sortedSongsArray = this.state.songs.sort((a, b) => (a[property] > b[property]) ? -1 : 1)

            this.setState({ songs: sortedSongsArray })
        }
    }

    render() {

        return (
            <div className="maincontainer">
                <Userinput addSongToPlaylist={this.addSongToPlaylist} sortPlaylist={this.sortPlaylist} />
                <Playlist songs={this.state.songs} />
            </div >
        )
    }
}

export default Container