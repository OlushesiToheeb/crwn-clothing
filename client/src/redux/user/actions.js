export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const EMAIL_SIGN_START = 'EMAIL_SIGN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'GOOGLE_SIGN_IN_FAILURE';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

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

export const signOutStart = () => ({
    type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (payload) => ({
    type: SIGN_OUT_FAILURE,
    payload,
});

export const signUpStart = (payload) => ({
    type: SIGN_UP_START,
    payload,
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
});

export const signUpFailure = (payload) => ({
    type: SIGN_UP_FAILURE,
    payload,
});
