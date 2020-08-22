import { PreloadedState, Reducer, Store, StoreEnhancer, StoreEnhancerStoreCreator } from 'redux';
import { GlobalState } from '../index';

const STORE_KEY = 'STATE';

// eslint-disable-next-line
function save(state: GlobalState): void {
  const copy = { ...state };
  delete copy.apps;
  localStorage.setItem('STATE', JSON.stringify(copy));
}

// @ts-ignore I really have to figure out what is wrong here
export const persist: StoreEnhancer = (next: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator => (
  reducer: Reducer<GlobalState>,
  preloadedState: PreloadedState<GlobalState>,
): Store<GlobalState> => {
  // load the initial state from storage
  const stateData = localStorage.getItem(STORE_KEY);
  // TODO: I have to figure out the typing here...
  let initialState = preloadedState || {};
  if (stateData) {
    initialState = { ...initialState, ...JSON.parse(stateData) };
  }

  // create the store
  const store = next(reducer, initialState);

  // store the new initial state
  save(store.getState());

  // store the state when it changes
  store.subscribe(() => {
    save(store.getState());
  });

  return store;
};
