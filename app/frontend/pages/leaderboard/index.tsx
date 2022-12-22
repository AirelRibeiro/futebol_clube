import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { requestLeaderboard } from '../../services/requestsFunctions';
import Header from '../../components/Header';
import SelectFilter from '../../components/SelectFilter';
import ILeaderboard from '../../interfaces/ILeaderBoard.interface';

export default function LeaderBoard() {
  const router = useRouter();
  const [board, setBoard] = useState<ILeaderboard[]>([]);

  useEffect(() => {
    requestLeaderboard('/')
      .then((data) => {
        setBoard(data);
      })
      .catch((err) => {
        console.log('ERROR', err);
        router.push('/users.login');
      });
  }, [router]);
  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">LeaderBoard</h1>
          </div>
          <SelectFilter setBoard={setBoard} />
        </div>
        <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Pontos
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Jogos
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Vitórias
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Empates
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Derrotas
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Gols
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
                >
                  Eficiência
                </th>
              </tr>
            </thead>
            <tbody>
              {board.map(
                (
                  {
                    name,
                    totalPoints,
                    totalGames,
                    totalVictories,
                    totalDraws,
                    totalLosses,
                    goalsFavor,
                    goalsOwn,
                    goalsBalance,
                    efficiency,
                  },
                  i
                ) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                      <div className="font-medium text-gray-900">{name}</div>
                      <div className="mt-0.5 text-gray-500 sm:hidden">
                        {`${totalGames} jogos: ganhou ${totalVictories}, empatou ${totalDraws} e perdeu ${totalLosses}`}
                      </div>
                      <div className="mt-0.5 text-gray-500 sm:hidden">
                        {`Balanço de gols: ${goalsBalance}, marcou ${goalsFavor} e sofreu ${goalsOwn}`}
                      </div>
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      {totalPoints}
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      {totalGames}
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      {totalVictories}
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      {totalDraws}
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      {totalLosses}
                    </td>
                    <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                      <div className="font-medium text-gray-900">{`Balanço de gols: ${goalsBalance}`}</div>
                      <div className="font-medium text-gray-900">{`Marcou ${goalsFavor}`}</div>
                      <div className="font-medium text-gray-900">{`Sofreu ${goalsOwn}`}</div>
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                      {efficiency}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
