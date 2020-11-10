import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectionCollection } from '../../redux/shop/selector';

import './collection.scss';

function CollectionPage({ collection }) {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToprops = (state, ownProps) => ({
    collection: selectionCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToprops)(CollectionPage);
