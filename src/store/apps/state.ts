export interface App {
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
      name: 'Spotify',
      openUrl: 'https://open.spotify.com/',
      iconUrl: 'https://open.scdn.co/cdn/images/icons/Spotify_256.c8416b60.png',
    },
  ],
};
