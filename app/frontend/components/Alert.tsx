import { XMarkIcon } from '@heroicons/react/24/solid';
import IAlertProps from '../interfaces/IAlertProps';

export default function Alert({ message, closeAlert }: IAlertProps) {
  return (
    <div
      id="alert-2"
      className="mb-4 flex rounded-lg bg-red-100 p-4 dark:bg-red-200"
      role="alert"
    >
      <p className="ml-3 w-80 text-center text-sm font-medium text-red-700 dark:text-red-800">
        {message}
      </p>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-red-100 p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
        data-dismiss-target="#alert-2"
        aria-label="Close"
        onClick={closeAlert}
      >
        <span className="sr-only">Close</span>
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
