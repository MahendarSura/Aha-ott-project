import React, { useState } from 'react';

// Simulated list of movies/shows (this can later be replaced with data from an API)
const mockData = [
  { title: 'Movie 1', description: 'Action movie' },
  { title: 'Movie 2', description: 'Romantic comedy' },
  { title: 'Show 1', description: 'Drama series' },
  { title: 'Show 2', description: 'Documentary series' },
  { title: 'Movie 3', description: 'Horror movie' },
  { title: 'Movie 4', description: 'Sci-fi adventure' },
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Filter the mock data based on the search query
    const results = mockData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div>
      <h1>Search Movies and Shows</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for movies or shows..."
        value={query}
        onChange={handleSearch}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}
      />

      {/* Show results */}
      {query && (
        <div>
          <h2>Search Results</h2>
          <ul style={{ paddingLeft: '0' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;

