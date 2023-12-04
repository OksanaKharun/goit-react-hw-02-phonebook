export default function Filter({filter, handleFilterChange }) {
  return (
    <div className="filter">
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}