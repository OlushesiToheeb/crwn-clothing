import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collection';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner';

import { fetchCollectionsStartAsync } from '../../redux/shop/actions';
import {
    selectIsCollectionFetching,
    selectIsCollectionsLoaded,
} from '../../redux/shop/selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCollectionsStartAsync());
    }
    render() {
        const { match, isCollectionFecthing, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        render={(props) => (
                            <CollectionsOverviewWithSpinner
                                isLoading={isCollectionFecthing}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={`${match.path}/:collectionId`}
                        render={(props) => (
                            <CollectionPageWithSpinner
                                isLoading={!isCollectionsLoaded}
                                {...props}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFecthing: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps)(ShopPage);
