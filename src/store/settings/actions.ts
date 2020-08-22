import { SettingsState } from './state';

export type Action = ReturnType<typeof setSetting>;

export enum Types {
  SET_SETTING = 'SET_SETTING',
}

export interface SetSettingAction {
  type: Types.SET_SETTING;
  data: Partial<SettingsState>;
}

export function setSetting<K extends keyof SettingsState>(setting: K, value: SettingsState[K]): SetSettingAction {
  return {
    type: Types.SET_SETTING,
    data: { [setting]: value },
  };
}
