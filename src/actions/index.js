export const addSongToPlaylist = (songObject) => {
    return {
        type: 'ADDSONGTOPLAYLIST',
        payload: songObject
    }
}

export const syncData = (data) => {
    return {
        type: 'SYNCDATA',
        payload: data
    }
}

export const sortSongs = (data) => {
    return {
        type: 'SORTSONGS',
        payload: data
    }
}

export const removeSong = (data) => {
    return {
        type: 'REMOVESONG',
        payload: data
    }
}

export const toggleLoading = () => {
    return {
        type: 'TOGGLELOADING',
    }
}


