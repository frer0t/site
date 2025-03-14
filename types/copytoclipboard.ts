export default interface ICopyToClipboard
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  contentClassName?: string;
  successDuration?: number;
  successIcon?: React.ReactNode;
  copyIcon?: React.ReactNode;
  successColor?: string;
}
