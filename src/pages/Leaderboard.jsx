import React from "react";
import { Trophy } from "lucide-react";

const sampleData = [
  { name: "Alice", score: 1200, rank: 1 },
  { name: "Bob", score: 1100, rank: 2 },
  { name: "Charlie", score: 1050, rank: 3 },
  { name: "You", score: 950, rank: 4 },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-6">
          <Trophy className="text-yellow-400" size={32} />
          <h1 className="text-3xl font-bold text-green-400">Leaderboard</h1>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="p-4 text-left">🏅 Rank</th>
                <th className="p-4 text-left">👤 Name</th>
                <th className="p-4 text-left">💯 Score</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((user) => (
                <tr
                  key={user.rank}
                  className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
                >
                  <td className="p-4 font-semibold text-green-400">{user.rank}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
