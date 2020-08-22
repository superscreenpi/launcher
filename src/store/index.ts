import { combineReducers } from 'redux';
import { settingsReducer } from './settings/reducers';
import { useSelector } from 'react-redux';
import { appsReducer } from './apps/reducers';
import { initialState as settingsState } from './settings/state';
import { initialState as appsState } from './apps/state';

export const initialState = {
  settings: settingsState,
  apps: appsState,
};

export type GlobalState = typeof initialState;

export const rootReducer = combineReducers({ settings: settingsReducer, apps: appsReducer });

export function useGlobal<T>(selector: (state: GlobalState) => T): T {
  return useSelector<GlobalState, T>(selector);
}
