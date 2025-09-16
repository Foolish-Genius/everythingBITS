import React, { useEffect, useState } from 'react';

export default function RedirectTimer({ url, seconds = 10 }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count === 0) {
      window.location.href = url;
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url]);

  return (
    <div className="redirect-timer" aria-live="polite">
      Redirecting to top URL in {count} seconds...
    </div>
  );
}
