import { createContext } from 'react';
import { IDropdownContext } from './dropdown.types';

const DropdownContext = createContext<IDropdownContext>({
  show: false,
  setShow: undefined,
});

export default DropdownContext;
