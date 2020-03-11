import { TVariant } from '../utils/types';

type IColor = {
  [key in TVariant]: {
    main: string;
    text: string;
    hover: string;
    active: string;
    disabled: string;
    outline: string;
  };
};

const Color: IColor = {
  primary: {
    main: '#3366FF',
    text: '#FFFFFF',
    hover: '#254EDB',
    active: '#1939B7',
    disabled: '#D6E4FF',
    outline: '#ADC8FF',
  },
  secondary: {
    main: '#FFA500',
    text: '#FFFFFF',
    hover: '#DB8500',
    active: '#B76900',
    disabled: '#FFF4CC',
    outline: '#FFE699',
  },
  success: {
    main: '#7EC61F',
    text: '#FFFFFF',
    hover: '#64AA16',
    active: '#4C8E0F',
    disabled: '#F1FCD1',
    outline: '#E0F9A5',
  },
  warning: {
    main: '#FFA500',
    text: '#FFFFFF',
    hover: '#DB8500',
    active: '#B76900',
    disabled: '#FFF4CC',
    outline: '#FFE699',
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
    main: '#F8F6F5',
    text: '#333333',
    hover: '#F1EEEE',
    active: '#E9E5E5',
    disabled: '#CCCCCC',
    outline: '#EEEEEE',
  },
  clean: {
    main: '#FFFFFF',
    text: '#3366FF',
    hover: '#F5F5F5',
    active: '#EEEEEE',
    disabled: '#F5F5F5',
    outline: '#EEEEEE',
  },
};

export default Color;
