// src/pages/Problems.jsx
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "problems"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id, // this uses the document ID, not the "id" field inside
        ...doc.data(),
      }));
      setProblems(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Problems</h2>
        {problems.length === 0 ? (
          <p className="text-gray-400">No problems found. Add some in Firestore!</p>
        ) : (
          <table className="w-full text-left border-collapse border border-green-400">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-green-400">Title</th>
                <th className="p-3 border border-green-400">Difficulty</th>
                <th className="p-3 border border-green-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
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
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
