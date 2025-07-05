import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyProblems = [
  { id: "1", title: "Two Sum", difficulty: "Easy" },
  { id: "2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
  { id: "3", title: "Median of Two Sorted Arrays", difficulty: "Hard" },
  { id: "4", title: "Valid Parentheses", difficulty: "Easy" },
  { id: "5", title: "Merge Intervals", difficulty: "Medium" },
];

export default function Problems() {
  const [filter, setFilter] = useState("All");

  const filteredProblems =
    filter === "All"
      ? dummyProblems
      : dummyProblems.filter((problem) => problem.difficulty === filter);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Problems</h2>

        {/* ✅ Filter Buttons */}
        <div className="flex gap-3 mb-6">
          {["All", "Easy", "Medium", "Hard"].map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-full border ${
                filter === level
                  ? "bg-green-400 text-black border-green-400"
                  : "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
              } transition`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* ✅ Table */}
        <table className="w-full text-left border-collapse border border-green-400 rounded-xl overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-green-400">Title</th>
              <th className="p-3 border border-green-400">Difficulty</th>
              <th className="p-3 border border-green-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-800 transition">
                <td className="p-3 border border-green-400">{problem.title}</td>
                <td className="p-3 border border-green-400">{problem.difficulty}</td>
                <td className="p-3 border border-green-400">
                  <Link
                    to={`/problems/${problem.id}`}
                    className="text-green-400 hover:underline"
                  >
                    Solve
                  </Link>
                </td>
              </tr>
            ))}
            {filteredProblems.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-400">
                  No problems found for "{filter}" difficulty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
