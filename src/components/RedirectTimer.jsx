import React, { useEffect, useState } from 'react';

export default function RedirectTimer({ url, seconds = 10 }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count <= 0) {
      window.location.href = url;
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url]);

  return (
    <div className="text-center text-red-500 font-semibold mt-4" aria-live="polite">
      Redirecting to top URL in {count} second{count !== 1 ? 's' : ''}...
    </div>
  );
}
