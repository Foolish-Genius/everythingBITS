import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['anime', 'manga', 'movies', 'games', 'livetv'];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Select Category</h1>
      <div className="category-grid">
        {categories.map(cat => (
          <div
            key={cat}
            className="category-card"
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/section/${cat}`)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(`/section/${cat}`)}
            aria-label={`Open ${cat} section`}
          >
            <h3>{cat.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
