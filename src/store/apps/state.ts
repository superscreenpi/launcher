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
    {
      id: 'dev.chrisdiana.calculator',
      name: 'Calculator',
      openUrl: 'https://chrisdiana.dev/pwa-calculator/',
      iconUrl: 'https://chrisdiana.dev/pwa-calculator/img/icons/android-chrome-512x512.png',
    },
    {
      id: 'dev.schmuckli.wallet',
      name: 'Wallet',
      openUrl: 'https://wallet.schmuckli.dev/',
      iconUrl: 'https://wallet.schmuckli.dev/android-icon-512x512.png',
    },
    {
      id: 'com.spotify.open',
      name: 'Spotify',
      openUrl: 'https://open.spotify.com/?utm_source=pwa_install',
      iconUrl: 'https://open.scdn.co/cdn/images/icons/Spotify_512.49a0bf03.png',
    },
    {
      id: 'com.aliexpress.store',
      name: 'AliExpress',
      openUrl: 'https://m.nl.aliexpress.com',
      iconUrl: 'https://ae01.alicdn.com/kf/Hf6ec66fcde824896a0e75be02021d64e5.png',
    },
  ],
};
