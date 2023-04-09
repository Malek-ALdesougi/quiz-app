import * as POINST_CONSTANTS from './constants'

export const checkUserAnswer = () => (dipatch) => {
    dipatch({type: POINST_CONSTANTS.CHECKING_ANSWER})
}

export const addPoint = () => (dispatch) => {
    dispatch({type: POINST_CONSTANTS.CORRECT_ANSWER})
}