const isLoading = (state, action) => {
    switch (action.type) {
        case 'TOGGLELOADING':
            return true;
        default:
            return false;
    }
}

export default isLoading;