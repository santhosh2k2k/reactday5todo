import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <label>Filter by Status:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="both">Both</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;
