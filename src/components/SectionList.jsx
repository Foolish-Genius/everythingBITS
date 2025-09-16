import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import checkUrls from '../utils/checkURLs';
import RedirectTimer from './RedirectTimer';

export default function SectionList() {
  const { category } = useParams();
  const [urls, setUrls] = useState([]);
  const [workingUrls, setWorkingUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    import(`../data/${category}.json`)
      .then(module => {
        const urlList = module.default;
        setUrls(urlList);
        return checkUrls(urlList);
      })
      .then(results => {
        setWorkingUrls(results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading)
    return (
      <div className="text-center mt-10 text-lg text-gray-400">
        Checking URLs...
      </div>
    );

  if (!workingUrls.length)
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">{category.toUpperCase()}</h2>
        <p className="text-gray-400">No accessible URLs found.</p>
      </main>
    );

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">
        {category.toUpperCase()} – Accessible Sites
      </h2>

      <RedirectTimer url={workingUrls[0]} seconds={5} />

      <ul className="divide-y divide-gray-700 mt-6">
        {workingUrls.map(url => (
          <li key={url} className="py-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-words"
              aria-label={`Open ${url}`}
            >
              {url}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
