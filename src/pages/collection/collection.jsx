import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectionCollection } from '../../redux/shop/selector';

import './collection.scss';

function CollectionPage({ collection }) {
    console.log(collection);
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
}

const mapStateToprops = (state, ownProps) => ({
    collection: selectionCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToprops)(CollectionPage);
