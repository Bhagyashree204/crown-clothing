import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/colection-overview/colection-overview.component';

const ShopPage = ({ match }) => (

    <div className='shop-page'>
        {/* to keep the shop pge simple all the details were routed to collection-overview page, for the better rendering with the categories we use route to display collection overview as well match.url has /shop value as path*/}
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.url}/:CollectionId`} component={CollectionPage} />
    </div>



);


export default ShopPage;