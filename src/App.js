import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/people/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok, try again later.');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData); // For debugging purposes
      })
      .catch((error) => {
        setError(error); // Handle any errors
      })
      .finally(() => {
        setLoading(false); // Loading is complete
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Display the name if it exists in the fetched data
  return (
    <div>
      <h1>{data?.birth_year || 'Name not available'}</h1>
      <p>{data?.body}</p>
    </div>
  );
  }

export default MyComponent;
