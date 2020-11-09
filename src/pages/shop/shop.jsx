import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {
    let { path } = useRouteMatch();
    return (
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${path}`} component={CollectionOverview} />
                <Route
                    exact
                    path={`${path}/:collectionId`}
                    component={CollectionPage}
                />
            </Switch>
        </div>
    );
};

export default ShopPage;
