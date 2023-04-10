import * as POINST_CONSTANTS from './constants'

export const checkUserAnswer = () => (dipatch) => {
    dipatch({type: POINST_CONSTANTS.CHECKING_ANSWER})
}

export const addPoint = () => (dispatch) => {
    dispatch({type: POINST_CONSTANTS.CORRECT_ANSWER})
}

export const removePoint = () => (dispatch) => {
    dispatch({type:POINST_CONSTANTS.PREVIOUS_QUSTION})
}

export const resetPoints = () => (dispatch) => {
    dispatch({type: POINST_CONSTANTS.RESET_POINTS})
}