export interface IModal {
  open: boolean;
  children?: React.ReactNode;
  handleClose?: () => void;
  title?: string;
}
