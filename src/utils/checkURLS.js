export default async function checkUrls(urls) {
  const check = url =>
    new Promise(resolve => {
      fetch(url, { method: 'HEAD', mode: 'no-cors' })
        .then(() => resolve(url))
        .catch(() => resolve(null));
      setTimeout(() => resolve(null), 5000);
    });

  const results = await Promise.all(urls.map(check));
  return results.filter(Boolean);
}
