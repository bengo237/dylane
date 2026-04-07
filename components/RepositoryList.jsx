import React, { useState, useEffect } from 'react';

const FetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(() => setData(null));
  }, [url]);

  return data;
};

export default FetchData;
