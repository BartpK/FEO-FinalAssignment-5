import React from 'react'

import Userinput from './Userinput';
import Playlist from './Playlist'

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            songs: [

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

    addSongToDatabase = async (songObject) => {

        if (songObject.title !== "" && songObject.artist !== "" && songObject.genre !== "Select a genre") {
            try {
                await fetch("https://react-playlist-4dfb9.firebaseio.com/playlist.json", { method: 'POST', body: JSON.stringify(songObject) })
                this.refreshData();
            } catch (error) {
                console.log(error)
            }
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

    cleanUpData = (data) => {
        if (data) {
            let songs = Object.keys(data).map(key => ({
                id: key,
                artist: data[key].artist,
                genre: data[key].genre,
                rating: data[key].rating,
                title: data[key].title
            }));
            this.syncStateToDatabase(songs);
        } else {
            let songs = [{
                id: "",
                artist: "",
                genre: "",
                title: "Start by adding your first song",
                rating: 3
            }]
            this.syncStateToDatabase(songs);
        }
    }

    refreshData = async () => {
        fetch("https://react-playlist-4dfb9.firebaseio.com/playlist.json", { method: "GET" })
            .then(response => response.json())
            .then(data =>
                this.cleanUpData(data))
    }

    syncStateToDatabase = (data) => {
        this.setState({
            songs: data,
            loading: false
        })
    }

    removeSongFromPlaylist = (songArray) => {

        const newArray = this.state.songs.filter(song => {
            if (!songArray.includes(song.id)) {
                return song
            }
        })
        this.updateSongsInPlaylist(newArray);
    }

    updateSongsInPlaylist = (songArray) => {
        this.setState({
            songs: songArray,
        })
    }

    removeSongFromDatabase = (songArray) => {
        songArray.forEach(song => {
            fetch(`https://react-playlist-4dfb9.firebaseio.com/playlist/${song}.json`, { method: 'DELETE' })
        })
    }

    clearPlaylistHandler = () => {
        const songsToRemove = this.state.songs.map(song => {
            return song.id;
        })
        this.removeSongFromPlaylist(songsToRemove);
        this.removeSongFromDatabase(songsToRemove);
    }


    //lifecycle methods below this line

    componentDidMount() {
        this.refreshData();
    }

    render() {

        return (
            <div className="backgroundcontainer">
                <div className="maincontainer">

                    <Userinput
                        addSongToPlaylist={this.addSongToPlaylist}
                        sortPlaylist={this.sortPlaylist}
                        addSongToDatabase={this.addSongToDatabase}
                    />
                    <Playlist
                        songs={this.state.songs}
                        loading={this.state.loading}
                        removeSongFromDatabase={this.removeSongFromDatabase}
                        removeSongFromPlaylist={this.removeSongFromPlaylist}
                        refreshData={this.refreshData}
                        clearPlaylistHandler={this.clearPlaylistHandler}
                    />

                    <button onClick={() => {
                        for (let i = 0; i < 25; i++) {
                            this.addSongToPlaylist({

                                title: i,
                                artist: i,
                                genre: "Rock",
                                rating: 3

                            });
                            this.addSongToDatabase({

                                title: i,
                                artist: i,
                                genre: "Rock",
                                rating: 3

                            });
                        }
                    }
                    }
                    > Create test data</button>
                </div>
            </div >
        )
    }
}

export default Container