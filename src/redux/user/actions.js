export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS';
export const GOOGLE_SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';
export const EMAIL_SIGN_START = 'EMAIL_SIGN_START';
export const EMAIL_SIGN_SUCCESS = 'EMAIL_SIGN_SUCCESs';
export const EMAIL_SIGN_FAILURE = 'EMAIL_SIGN_FAILURE';

export const setCurrentuser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (payload) => ({
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload,
});

export const googleSignInFailure = (payload) => ({
    type: GOOGLE_SIGN_IN_FAILURE,
    payload,
});

export const emailSignInStart = (payload) => ({
    type: EMAIL_SIGN_START,
    payload,
});

export const emailSignInSuccess = (payload) => ({
    type: EMAIL_SIGN_SUCCESS,
    payload,
});

export const emailSignInFailure = (payload) => ({
    type: EMAIL_SIGN_FAILURE,
    payload,
});
