export interface IDropdown extends React.HTMLAttributes<HTMLDivElement> {}

export interface IDropdownContext {
  show: boolean;
  setShow?: (show: boolean) => void;
}

export interface IDropdownItem
  extends Omit<
    React.AllHTMLAttributes<HTMLDivElement | HTMLAnchorElement>,
    'onClick'
  > {
  active?: boolean;
  color?: string;
  as?: 'a' | 'div';
  onClick?: (value: string | null) => void;
}

export interface IDropdownMenu extends React.HTMLAttributes<HTMLDivElement> {
  right?: boolean;
}

export interface IMenuStyled extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  right?: boolean;
}

export interface IItemStyled
  extends React.AllHTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  active: boolean;
  color?: string;
  as?: 'a' | 'div';
}

export interface IDropdownPartials {
  Toggle: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Item: React.FC<IDropdownItem>;
  Menu: React.FC<IDropdownMenu>;
}
