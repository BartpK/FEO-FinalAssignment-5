const isLoading = (state, action) => {
    switch (action.type) {
        case 'TOGGLELOADING':
            return false;
        default:
            return true;
    }
}

export default isLoading;