import { combineReducers } from 'redux';
import { settingsReducer } from './settings/reducers';
import { useSelector } from 'react-redux';

export type GlobalState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ settings: settingsReducer });

export function useGlobal<T>(selector: (state: GlobalState) => T): T {
  return useSelector<GlobalState, T>(selector);
}
