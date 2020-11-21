export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_START = 'EMAIL_SIGN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (payload) => ({
    type: EMAIL_SIGN_START,
    payload,
});

export const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload,
});

export const signInFailure = (payload) => ({
    type: SIGN_IN_FAILURE,
    payload,
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION,
});
