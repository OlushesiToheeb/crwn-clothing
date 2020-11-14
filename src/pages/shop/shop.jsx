import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collection';
import { connect } from 'react-redux';

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collection');
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.dispatch(updateCollections(collectionsMap));
        });
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionOverview}
                    />
                    <Route
                        exact
                        path={`${match.path}/:collectionId`}
                        component={CollectionPage}
                    />
                </Switch>
            </div>
        );
    }
}

export default connect()(ShopPage);
