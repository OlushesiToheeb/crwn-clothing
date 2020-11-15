import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collection';
import { connect } from 'react-redux';

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner';

import { updateCollections } from '../../redux/shop/actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true,
    };
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collection');
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.dispatch(updateCollections(collectionsMap));
            this.setState({ loading: false });
        });
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        render={(props) => (
                            <CollectionsOverviewWithSpinner
                                isLoading={loading}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={`${match.path}/:collectionId`}
                        render={(props) => (
                            <CollectionPageWithSpinner
                                isLoading={loading}
                                {...props}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default connect()(ShopPage);
