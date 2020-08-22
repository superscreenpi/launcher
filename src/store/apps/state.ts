export interface App {
  id: string;
  name: string;
  openUrl: string;
  // todo: at some point, this should be a list of icons and we should select the correct one
  iconUrl: string;
}

export interface AppsState {
  apps: App[];
}

export const initialState: AppsState = {
  apps: [
    {
      id: 'io.chapp.dino',
      name: 'Dino',
      openUrl: 'https://www.chapp.io/dino',
      iconUrl: 'https://www.chapp.io/dino/logo512.png',
    },
  ],
};
