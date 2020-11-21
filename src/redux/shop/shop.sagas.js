// takeEvery list listening for actions of a specific type that is pass to it
import { takeEvery, call, put } from 'redux-saga/effects';

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
    // the first arg for takeLatest is the actiontype to be updated and the second is the generator function you want to run
    // takeEvrer creates a non blocking to call so that the app is non blocking
    yield takeEvery(FECTH_COLLECTIONS_START, fetchCollectionsAsync);
}
