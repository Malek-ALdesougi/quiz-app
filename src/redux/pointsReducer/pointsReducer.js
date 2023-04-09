import * as POINTS_CONSTANTS from './constants'
const initState = {
    points: 0,
    loading: false,
}

export const pointsReducer = (state = initState, action) => {

    switch (action.type) {
        case POINTS_CONSTANTS.CHECKING_ANSWER:
            return { ...state, loading: true };
        case POINTS_CONSTANTS.CORRECT_ANSWER:
            return { ...state, points: state.points + 1, loading: false}
        default:
            return state;
    }
}