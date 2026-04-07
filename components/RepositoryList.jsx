import React, { useState, useEffect } from 'react';

const FetchData = (url) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const headers = {};
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) headers["Authorization"] = `Bearer ${token}`;

    fetch(url, { headers })
      .then(response => response.json())
      .then(jsonData => setData(Array.isArray(jsonData) ? jsonData : null))
      .catch(() => setData(null));
  }, [url]);

  return data;
};

export default FetchData;
