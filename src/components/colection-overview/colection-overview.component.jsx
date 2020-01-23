import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './colection-overview.styles.scss';
import CollectionPreview from '../../components/colection-preview/collection-preview.component';
import {selectCollectionForOverview} from '../../redux/shop/shop.selector';

const collectionOverview = ({collections}) => (

    <div className='colection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) =>
            <CollectionPreview key={id} {...otherCollectionProps} />)
        }
    </div>
);


const mapStateToProps =createStructuredSelector({
    collections: selectCollectionForOverview
})

export default connect(mapStateToProps,null)(collectionOverview);