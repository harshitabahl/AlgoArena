import React, { useState } from "react";

// Dummy problem data
const problemsData = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "HashMap"],
    status: "Solved",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating",
    difficulty: "Medium",
    tags: ["String", "Sliding Window"],
    status: "Unsolved",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search"],
    status: "Unsolved",
  },
];

export default function Problems() {
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredProblems =
    difficultyFilter === "All"
      ? problemsData
      : problemsData.filter((p) => p.difficulty === difficultyFilter);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Problem List</h1>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficultyFilter(level)}
            className={`px-4 py-2 rounded-full border ${
              difficultyFilter === level
                ? "bg-green-500 text-white border-green-600"
                : "bg-gray-800 text-gray-300 border-gray-700"
            } hover:bg-green-600 transition`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Problem Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-sm sm:text-base">
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Difficulty</th>
              <th className="py-2 px-4">Tags</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem) => (
              <tr
                key={problem.id}
                className="border-t border-gray-700 hover:bg-gray-800 text-sm sm:text-base"
              >
                <td className="py-2 px-4">{problem.title}</td>
                <td
                  className={`py-2 px-4 ${
                    problem.difficulty === "Easy"
                      ? "text-green-400"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {problem.difficulty}
                </td>
                <td className="py-2 px-4">
                  {problem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td
                  className={`py-2 px-4 ${
                    problem.status === "Solved"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {problem.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}