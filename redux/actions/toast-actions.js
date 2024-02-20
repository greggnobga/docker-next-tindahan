import { TOAST_RESET } from '../constants/toast-constants';

export const resetToast = (params) => async (dispatch) => {
    /** Dispatch reset. */
    dispatch({
        type: TOAST_RESET,
        payload: {},
    });
};
