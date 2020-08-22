import { initialState, SettingsState } from './state';
import { Action, Types } from './actions';

export const settingsReducer = (state = initialState, action: Action): SettingsState => {
  switch (action.type) {
    case Types.SET_SETTING:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
