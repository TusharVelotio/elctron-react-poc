import '@emotion/react';
import {
  createTheme,
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';
import { sizeToRem } from './utils';

// Define the extended Emotion theme interface
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      [key: number]: number;
    };
    textStyles: {
      [key: string]: {
        fontFace: string;
        fontSize: string;
        letterSpacing: string;
        lineHeight: string;
        fontColor?: string;
        fontOpacity?: string;
        margin?: number | string;
      };
    };
  }
}

// Extend Material-UI's Theme interface to include custom properties
declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      [key: number]: number;
    };
    textStyles: {
      [key: string]: {
        fontFace: string;
        fontSize: string;
        letterSpacing: string;
        lineHeight: string;
        fontColor?: string;
        fontOpacity?: string;
        margin?: number | string;
      };
    };
  }
  // Allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      primary?: string;
      secondary?: string;
    };
    fontSizes?: {
      [key: number]: number;
    };
    textStyles?: {
      [key: string]: {
        fontFace: string;
        fontSize: string;
        letterSpacing: string;
        lineHeight: string;
        fontColor?: string;
        fontOpacity?: string;
        margin?: number | string;
      };
    };
  }
}

const FONT_SIZES = {
  60: 60,
  48: 48,
  44: 44,
  40: 40,
  36: 36,
  32: 32,
  30: 30,
  28: 28,
  26: 26,
  24: 24,
  22: 22,
};

const LETTER_SPACINGS = {
  0: 0,
  0.1: 0.1,
  0.2: 0.2,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
  },
  colors: {
    primary: 'white',
    secondary: 'gray',
  },
  fontSizes: FONT_SIZES,
  textStyles: {
    pageTitle: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[60]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.2]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[60] * 1.2}dp`),
      margin: 0,
    },
    subheader: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[44]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.2]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[44] * 1.2}dp`),
      margin: 0,
    },
    body1: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[36]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[36] * 1.2}dp`),
      margin: 0,
    },
    body2: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[30]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[30] * 1.2}dp`),
      margin: 0,
    },
    body3: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[28]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[28] * 1.2}dp`),
      margin: 0,
    },
    body4: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[22]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[22] * 1.1}dp`),
      margin: 0,
    },
    buttonLabel1Default: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[36]}sp`),
      fontColor: '#FFFFFF',
      fontOpacity: '100%',
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[36] * 1.2}dp`),
      margin: 0,
    },
    buttonLabel2Default: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[24]}sp`),
      fontOpacity: '80%',
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[24] * 1.2}dp`),
      margin: 0,
    },
    message1: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[32]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[32] * 1.2}dp`),
      margin: 0,
    },
    message2: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[28]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[28] * 1.2}dp`),
      margin: 0,
    },
    panelTitle: {
      fontFace: 'Roboto-Bold',
      fontSize: sizeToRem(`${FONT_SIZES[40]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[60] * 1.2}dp`),
      margin: 0,
    },
    panelButtonLabel1: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[26]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[26] * 1.2}dp`),
      margin: 0,
    },
    panelButtonLabel2: {
      fontFace: 'Roboto-Regular',
      fontSize: sizeToRem(`${FONT_SIZES[24]}sp`),
      fontOpacity: '80%',
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[24] * 1.2}dp`),
      margin: 0,
    },
    panelBody1: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[26]}sp`),
      fontColor: '#ADADAD',
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[26] * 1.2}dp`),
      margin: 0,
    },
    fullPageHeader: {
      fontFace: 'Roboto-Medium',
      fontSize: sizeToRem(`${FONT_SIZES[48]}sp`),
      letterSpacing: sizeToRem(`${LETTER_SPACINGS[0.1]}dp`),
      lineHeight: sizeToRem(`${FONT_SIZES[48]}dp`),
      margin: 0,
    },
  },
});

export default theme;
