import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import checkUrls from '../utils/checkUrls';

export default function SectionList() {
  const { category } = useParams();
  const [urls, setUrls] = useState([]);
  const [workingUrls, setWorkingUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    import(`../data/${category}.json`)
      .then(module => {
        setUrls(module.default);
        return checkUrls(module.default);
      })
      .then(results => {
        setWorkingUrls(results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) return <div className="loader">Checking URLs...</div>;
  if (!workingUrls.length) return <div className="container"><h2>{category.toUpperCase()}</h2><p>No accessible URLs found.</p></div>;

  return (
    <div className="container">
      <h2>{category.toUpperCase()} - Accessible Sites</h2>
      <ul className="url-list">
        {workingUrls.map(url => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${url}`}>
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
