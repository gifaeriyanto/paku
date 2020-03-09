export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  customStyle?: any;
}

export interface IButtonBase {
  customStyle?: any;
  as?: React.ElementType;
}
