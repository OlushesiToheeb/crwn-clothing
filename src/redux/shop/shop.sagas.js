// takeEvery list listening for actions of a specific type that is pass to it
import { takeLatest, call, put } from 'redux-saga/effects';

import { FECTH_COLLECTIONS_START } from './actionTypes';

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { fetchCollectionsSucces, fetchCollectionsFailure } from './actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        // Sagas does not use dispatch keyword to dispatch actions instead they use "put"
        yield put(fetchCollectionsSucces(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    // if take latest ever fires multiple times.
    //The last one is probably going to get the most up to date data from our database so it's safe to sayusing take latest is the best option.
    // takeEvery creates a non blocking to call so that the app is non blocking
    yield takeLatest(FECTH_COLLECTIONS_START, fetchCollectionsAsync);
}
