export interface HomeProps {
  alertNewRoom: Function;
  toggleTheme: Function;
  toggleRoom: Function;
  themes: string;
  alertAddNewRoom: string;
  rooms: Array<Object>;
}

export interface FooterProps {
  toggleTheme: Function;
  themes: string;
}

export interface MainRoomsProps {
  rooms: Array<Object>;
  toggleRoom: Function;
}

export interface ToggleButtonProps {
  id: string;
  turnOffRoom: boolean;
  toggleRoom: Function;
}

export interface HomeHeaderProps {
  alertNewRoom: Function;
  alertAddNewRoom: string;
}
