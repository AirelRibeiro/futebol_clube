import { MouseEventHandler } from 'react';

export default interface IAlertProps {
  message: string;
  closeAlert: MouseEventHandler<HTMLButtonElement>;
}
