const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD5 = 'Add 5';
const SUB5 = 'Subtract 5';
const DELVAL = 'Delete Val';
const STOREVAL = 'Store Value';

//action creators

export const inc_val = () => {
    return {
        type: INCREMENT
    }
}
export const dec_val = () => {
    return {
        type: DECREMENT
    }
}

export const add_5 = (val) => {
    return {
        type: ADD5,
        value: val
    }
}

export const sub_5 = (val) => {
    return {
        type: SUB5,
        value: val
    }
}

export const del_val = (val) => {
    return {
        type: DELVAL,
        resultId: val
    }
}

const storing_val = (val) => {
    return {
        type: STOREVAL,
        value: val
    }
}

export const store_val = (val) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(storing_val(val))
        }, 5000);
    }
}