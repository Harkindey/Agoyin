import {
    FETCH_LOCATIION
  } from '../actions/types';
  
  export default function (state = {}, action) {
    switch (action.type) {
      case FETCH_LOCATIION:
        return action.payload;
      default:
        return state;
    }
  }
  