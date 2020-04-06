import 'styled-components';


// and extend them!
declare module 'styled-components'{
  export interface DefaultTheme{
    borderRadiusSmall: string;
    borderRadiusMedium: string;
    appSize: string;
    shadow: {
      lightShadow: string;
      darkShadow: string;
      blackShadow: string;
    };
    colors: {
      green: string;
      primary: string;
      secondary: string;
      dark: string;
      white: string;
      offWhite: string;
      danger: string;
      common: string;
      warning: string;
    };
    size: {
      maxWidth: string;
      mainSpacing: string;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
