import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/selector';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collectionOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
