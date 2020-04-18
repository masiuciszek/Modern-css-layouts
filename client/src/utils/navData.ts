/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface INavData {
  path: string;
  text: string;
}

export const navData: INavData[] = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/about',
    text: 'about',
  },
  {
    path: '/contact',
    text: 'contact',
  },
  {
    path: '/register',
    text: 'register',
  },
  {
    path: '/auth',
    text: 'login',
  },

];
