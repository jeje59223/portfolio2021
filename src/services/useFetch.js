import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3003/';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function init() {
      const response = await fetch(baseUrl + url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },

      });
      const json = await response.json();
      setData(json);
    }
    init();
  }, [url]);

  return { data };
}
