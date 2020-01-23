import {createSelector} from 'reselect';
//state.shop is from root-reducer

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop =>shop.collections
);

export const selectCollectionForOverview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export default selectCollections;