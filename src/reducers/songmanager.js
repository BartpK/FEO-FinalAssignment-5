const songManager = (state/* = { songs: [] }*/, action) => {
    switch (action.type) {
        case 'ADDSONGTOPLAYLIST':
            const stateWithNewSong = state.songs.concat(action.payload)
            return { songs: stateWithNewSong };
        case 'SYNCDATA':
            const stateWithFreshData = { songs: action.payload }
            return stateWithFreshData
        case 'SORTSONGS':
            const stateWithSortedSongs = { songs: action.payload }
            return stateWithSortedSongs
        case 'REMOVESONG':
            const stateWithSongRemoved = { songs: action.payload }
            return stateWithSongRemoved
        default:
            return { songs: [{ title: "dumb" }] };
    }
}

export default songManager

//reducers carry out actions on the store