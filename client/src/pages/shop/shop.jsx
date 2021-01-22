import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collectionOverview/collectionOverview-container';
import CollectionPageContainer from '../collection/collection-container';

import { fetchCollectionsStart } from '../../redux/shop/actions';

class ShopPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCollectionsStart());
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}
                    />
                    <Route
                        exact
                        path={`${match.path}/:collectionId`}
                        component={CollectionPageContainer}
                    />
                </Switch>
            </div>
        );
    }
}

export default connect()(ShopPage);
