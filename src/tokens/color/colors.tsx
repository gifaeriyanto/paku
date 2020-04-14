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
    main: '#4694EB',
    text: '#FFFFFF',
    hover: '#3373CA',
    active: '#2355A9',
    disabled: '#DAF1FE',
    outline: '#B5E1FD',
  },
  secondary: {
    main: '#00CBAE',
    text: '#FFFFFF',
    hover: '#00AEA5',
    active: '#008B92',
    disabled: '#C9FCE2',
    outline: '#95F9CF',
  },
  danger: {
    main: '#F9587A',
    text: '#FFFFFF',
    hover: '#D6406E',
    active: '#B32C62',
    disabled: '#FEE3DD',
    outline: '#FEC1BC',
  },
  neutral: {
    main: '#414F56',
    text: '#FFFFFF',
    hover: '#2F3F49',
    active: '#20303D',
    disabled: '#EAF5F6',
    outline: '#D6EAEE',
  },
  background: {
    level1: '#F6F7FA',
    level2: '#E3ECF5',
    level3: '#E3EEFA',
  },
  border: '#ADB8BE',
  placeholder: '#747474',
  white: '#FFFFFF',
  black: '#000000',
};

export default Color;
