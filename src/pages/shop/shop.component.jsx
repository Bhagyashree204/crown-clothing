import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/colection-overview/colection-overview.component';
import {firestore,convertCollectionssnapshotToMap} from '../../components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state={
        loading:true
    };
    unsubscribeFromSnapshot=null;

    componentDidMount() {
        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot =>{
        const collectionsMap=convertCollectionssnapshotToMap(snapshot)
        updateCollections(collectionsMap);
        this.setState({loading:false});
    
        });
        
}


    render() {
        const { match } = this.props;
        const {loading}=this.state;
        return (
            <div className='shop-page'>
                {/* to keep the shop pge simple all the details were routed to collection-overview page, for the better rendering with the categories we use route to display collection overview as well match.url has /shop value as path*/}
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.url}/:CollectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>

        );

    }



}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))

})


export default connect(null, mapDispatchToProps)(ShopPage);

/*Withspiner is a higher order compo is used to load until data is fetched from backend completely. since we had added shop_data initial state to be null it is advisible to add spinner to indicate fetching of data */