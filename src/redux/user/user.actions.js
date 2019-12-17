import {userActionTypes} from './usertypes';

export const setCurrentUser= user => ({

    type:userActionTypes.SET_CURRENT_USER,
    payload:user
});