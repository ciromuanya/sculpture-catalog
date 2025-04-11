import { useEffect, useState } from "react";

function App() {
  // State variables
  const [sculptures, setSculptures] = useState([]);

  // Fetch all sculptures from the server, update the state when the data is fetched.
  useEffect(() => {
    fetch("http://localhost:5000/sculptures")
      .then((res) => res.json())
      .then((data) => setSculptures(data));
  }, []);

  // JSX to render the sculptures
  return (
    <div>
      <h1>Sculpture Catalog</h1>
      {sculptures.map((sculpture) => (
        <div key={sculpture.id}>
          <h2>
            {sculpture.name} by {sculpture.artist}
          </h2>
          <img
            src={`http://localhost:5000${sculpture.image_url}`}
            alt={sculpture.name}
            width="200"
          />
          <p>{sculpture.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
