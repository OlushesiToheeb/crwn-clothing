import {
    FECTH_COLLECTIONS_START,
    FECTH_COLLECTIONS_SUCCESS,
    FECTH_COLLECTIONS_FAILURE,
} from './actionTypes';

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: FECTH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = (payload) => ({
    type: FECTH_COLLECTIONS_SUCCESS,
    payload,
});

export const fetchCollectionsFailure = (payload) => ({
    type: FECTH_COLLECTIONS_FAILURE,
    payload,
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(
                    snapshot
                );
                dispatch(fetchCollectionsSucces(collectionsMap));
            })
            .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
    };
};
