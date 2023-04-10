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
            return { ...state, points: state.points + 1, loading: false }
        case POINTS_CONSTANTS.PREVIOUS_QUSTION:
            return { ...state, points: state.points - 1, loading: false }
        case POINTS_CONSTANTS.RESET_POINTS:
            return { ...state, points: 0 }
        default:
            return state;
    }
}