import { App, AppsState } from './state';

export type Action = ReturnType<typeof addApp>;

export enum Types {
  ADD_APP = 'ADD_APP',
}

export interface AddAppAction {
  type: Types.ADD_APP;
  data: App;
}

export function addApp<K extends keyof AppsState>(app: App): AddAppAction {
  return {
    type: Types.ADD_APP,
    data: app,
  };
}
