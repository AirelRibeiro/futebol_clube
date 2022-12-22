import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { requestTeams } from '../../services/requestsFunctions';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    requestTeams()
      .then((data) => {
        setTeams(data);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teams.length &&
            teams.map(({ id, teamName }) => (
              <li key={id} className="col-span-1 flex shadow-sm rounded-md">
                <div className="bg-yellow-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
                  {teamName[0]}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <h3 className="text-gray-900 font-extrabold">{teamName}</h3>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
