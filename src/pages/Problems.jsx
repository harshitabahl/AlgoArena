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
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = Array.from(
    new Set(problemsData.flatMap((p) => p.tags || []))
  );

  const filteredProblems = problemsData.filter((p) => {
    const matchesDifficulty =
      difficultyFilter === "All" || p.difficulty === difficultyFilter;

    const matchesTag =
      selectedTag === "All" || (p.tags && p.tags.includes(selectedTag));

    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesDifficulty && matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Problem List</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Difficulty Filters */}
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

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-3 py-1 rounded-full border ${
            selectedTag === "All"
              ? "bg-green-500 text-white"
              : "bg-gray-800 text-white border-gray-600"
          }`}
        >
          All Tags
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              selectedTag === tag
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-white border-gray-600"
            }`}
          >
            {tag}
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
