import Header from '../../components/Header';
import {
  HomeIcon,
  GlobeAmericasIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import IMatch from '../../interfaces/IMatch.interface';
import { requestMatches } from '../../services/requestsFunctions';
import RadioFilter from '../../components/RadioFilter';

export default function Match() {
  const [matches, setMaches] = useState<IMatch[]>([]);

  useEffect(() => {
    requestMatches('/')
      .then((data) => {
        setMaches(data);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-8">
        <RadioFilter setMatches={setMaches} />
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {matches.length &&
            matches.map((match) => (
              <li
                key={match.id}
                className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 border-1"
              >
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <span
                        className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium ${
                          match.inProgress
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-900'
                        } rounded-full`}
                      >
                        <h2 className="text-sm font-medium truncate">
                          {match.inProgress ? 'Em andamento' : 'Finalizada'}
                        </h2>
                      </span>
                    </div>
                  </div>
                  <p className="sr-only">Placar:</p>
                  <h1 className="text-gray-900 text-3xl font-semibold flex justify-evenly items-center">
                    <span>{match.homeTeamGoals}</span>
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                    <span>{match.awayTeamGoals}</span>
                  </h1>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                      <HomeIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{match.teamHome.teamName}</span>
                    </div>
                    <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                      <GlobeAmericasIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{match.teamAway.teamName}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
