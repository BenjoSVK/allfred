import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/people/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok, try again later.');
        }
        return response.json();
      })
      .then((jsonData) => {
        // const results = jsonData.results; // Assuming 'results' is an array in your JSON data
        // console.log(results); // Logs the entire 'results' array
        // results.forEach(item => console.log(item)); // Logs each item in the 'results' array
        setData(jsonData);
        console.log(jsonData.results); // For debugging purposes
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
      {data.results.map((item, index) => (
       <div key={index.toString()}>
       <p> {index + 1} : {item.name || 'Name not available'}</p>
       <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={item.name}></img>
     </div>
      ))}
    </div>
  );
}

export default MyComponent;
