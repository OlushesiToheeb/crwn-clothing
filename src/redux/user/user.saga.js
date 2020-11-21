import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    auth,
    googleProvider,
    createUserProfileDocument,
} from '../../firebase/firebase.utils';

import {
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    EMAIL_SIGN_START,
    EMAIL_SIGN_SUCCESS,
    EMAIL_SIGN_FAILURE,
} from './actions';

import { googleSignInSuccess, googleSignInFailure } from './actions';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}
