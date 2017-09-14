import { Location, Permissions } from 'expo';

import {
    FETCH_LOCATION,
    PERMISSION_GRANTED
  } from './types'


export const _getLocationAsync = (callback) => async (dispatch) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      dispatch({ type: PERMISSION_GRANTED, payload: 'Permission to access location was denied' });
    }

    let location = await Location.getCurrentPositionAsync({});
    dispatch({ type: FETCH_LOCATION, payload: location });
    callback();
  };