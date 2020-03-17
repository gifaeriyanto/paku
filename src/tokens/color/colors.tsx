import { IColor } from './colors.types';

/*
  COLOR PATTERN
  Pick color from https://colors.eva.design/
  Here are the color levels for all variants, you can change
  it as needed without following this pattern.

  main: 500
  hover: 600
  active: 700
  disabled: 100
  outline: 200
*/

const Color: IColor = {
  primary: {
    main: '#029FE2',
    text: '#FFFFFF',
    hover: '#017BC2',
    active: '#015CA2',
    disabled: '#CBFBFD',
    outline: '#98F2FC',
  },
  secondary: {
    main: '#0256E2',
    text: '#FFFFFF',
    hover: '#0142C2',
    active: '#0131A2',
    disabled: '#CBE5FD',
    outline: '#98C9FC',
  },
  danger: {
    main: '#FF5238',
    text: '#FFFFFF',
    hover: '#DB3228',
    active: '#B71C20',
    disabled: '#FFE8D7',
    outline: '#FFCCAF',
  },
  neutral: {
    main: '#414F56',
    text: '#FFFFFF',
    hover: '#2F3F49',
    active: '#20303D',
    disabled: '#EAF5F6',
    outline: '#D6EAEE',
  },
  border: '#D2DCE2',
};

export default Color;
