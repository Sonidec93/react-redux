const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Delete Val':
            {
                let newResult = [...state.results];
                newResult.splice(action.resultId, 1)
                return {
                    ...state,
                    results: newResult
                }
            }
        case 'Store Value':
            {
                let newResult = [...state.results];
                newResult.push(action.value);
                return {
                    ...state,
                    results: newResult
                }
            }


    }
    return state

};

export default reducer;