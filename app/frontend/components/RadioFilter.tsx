import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { requestMatches } from '../services/requestsFunctions';
import IMatch from '../interfaces/IMatch.interface';

const filters = [
  { value: '/?inProgress=true', name: 'Partidas em progresso' },
  { value: '/?inProgress=false', name: 'Partidas finalizadas' },
  { value: '/', name: 'Todas as partidas' },
];

interface IProps {
  setMatches: Dispatch<SetStateAction<IMatch[]>>;
}

export default function RadioFilter({ setMatches }: IProps) {
  const [checked, setChecked] = useState(filters[2]);

  useEffect(() => {
    requestMatches(checked.value)
      .then((data) => {
        setMatches(data);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }, [checked, setMatches]);

  return (
    <div className="mb-6">
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          <label className="text-base font-medium text-gray-700">
            Selecione quais partidas você quer visualizar:
          </label>
          {filters.map((filter) => (
            <div key={filter.value} className="flex items-center">
              <input
                id={filter.value}
                name="notification-method"
                type="radio"
                checked={filter.value === checked.value}
                className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                onChange={() => setChecked(filter)}
              />
              <label
                htmlFor={filter.value}
                className="ml-3 block text-sm font-medium text-gray-900"
              >
                {filter.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
