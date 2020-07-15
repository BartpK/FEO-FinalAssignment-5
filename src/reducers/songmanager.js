const initialState = { songs: [] }

const songManager = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDSONGTOPLAYLIST':
            const stateWithNewSong = state.songs.concat(action.payload)
            return { songs: stateWithNewSong };
        case 'SYNCDATA':
            const stateWithFreshData = { songs: action.payload }
            return stateWithFreshData
        case 'SORTSONGS':
            return { songs: [...action.payload] }
        case 'REMOVESONG':
            const stateWithSongRemoved = { songs: action.payload }
            return stateWithSongRemoved
        default:
            return { songs: [] };
    }
}
export default songManager

