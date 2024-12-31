import React, { useState, useEffect } from 'react';

function Display() {
  // State to store the API data
  const [data, setData] = useState([]);

  // API endpoint URL
  const apiUrl = 'http://localhost:3000/api/getusers';

  // Fetch data from API when the component mounts
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  // Render the data
  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <h2>{item.email} {item.userName}</h2>
        ))}
      </ul>
    </div>
  );
}

export default Display;