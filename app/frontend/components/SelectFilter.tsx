import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { requestLeaderboard } from '../services/requestsFunctions';
import ILeaderboard from '../interfaces/ILeaderBoard.interface';

const filters = [
  { value: '/home', name: 'Classificação pelos times da casa' },
  { value: '/away', name: 'Classificação pelos times visitantes' },
  { value: '/', name: 'Classificação geral' },
];

interface IProps {
  setBoard: Dispatch<SetStateAction<ILeaderboard[]>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectFilter({ setBoard }: IProps) {
  const [selected, setSelected] = useState(filters[2]);

  useEffect(() => {
    requestLeaderboard(selected.value)
      .then((data) => {
        setBoard(data);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }, [selected, setBoard]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative grow">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {filters.map((filter) => (
                  <Listbox.Option
                    key={filter.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-gray-900 bg-yellow-50' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={filter}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {filter.name}
                        </span>

                        {selected ? (
                          <span className="text-yellow-600 font-extrabold absolute inset-y-0 right-0 flex items-center pr-4">
                            <CheckIcon
                              className="h-5 w-5 font-extrabold"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
