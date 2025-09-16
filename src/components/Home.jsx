import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['anime', 'manga', 'movies', 'games', 'livetv'];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">Select Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <button
            key={cat}
            className="bg-gray-800 rounded-lg p-6 text-center hover:bg-blue-600 transition"
            onClick={() => navigate(`/section/${cat}`)}
            aria-label={`Open ${cat} section`}
          >
            <h3 className="text-xl font-semibold text-white">{cat.toUpperCase()}</h3>
          </button>
        ))}
      </div>
    </main>
  );
}
