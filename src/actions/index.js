export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

//This is where actions are created, these will be send to the reducers. testing this now.

//Test action
export const addSongToPlaylist = (songObject) => {
    return {
        type: 'ADDSONGTOPLAYLIST',
        payload: songObject
    }
}

//Add all songs to state
export const syncData = (data) => {
    return {
        type: 'SYNCDATA',
        payload: data
    }
}

//Add all songs to state
export const sortSongs = (data) => {
    return {
        type: 'SORTSONGS',
        payload: data
    }
}

export const toggleLoading = () => {
    return {
        type: 'TOGGLELOADING',
    }
}

export const removeSong = (data) => {
    return {
        type: 'REMOVESONG',
        payload: data
    }
}
