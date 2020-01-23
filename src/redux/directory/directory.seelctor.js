import {createSelector} from 'reselect';

const selectDirecotry = state => state.directory;

export const selectDirecotrySections = createSelector(
    [selectDirecotry],
    directory=>directory.sections

);