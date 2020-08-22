import { AppsState, initialState } from './state';
import { Action, Types } from './actions';

export const appsReducer = (state = initialState, action: Action): AppsState => {
  switch (action.type) {
    case Types.ADD_APP:
      return { ...state, apps: [...state.apps, action.data] };
    default:
      return state;
  }
};
