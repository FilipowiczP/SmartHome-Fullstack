export interface HomeProps {
  alertNewRoom: Function;
  toggleTheme: Function;
  themes: string;
  alertAddNewRoom: string;
  rooms: Array<Object>;
}

export interface FooterProps {
  toggleTheme: Function;
  themes: string;
}

export interface MainProps {
  rooms: Array<Object>;
}

export interface ToggleButtonProps {
  id: string;
  turnOffRoom: boolean;
}

export interface HomeHeaderProps {
  alertNewRoom: Function;
  alertAddNewRoom: string;
}
