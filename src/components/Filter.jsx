export default function Filter({filter, handleFilterChange }) {
  return (
    <div className="filter">
      <h3 htmlFor="search">Find contacts by name</h3>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}