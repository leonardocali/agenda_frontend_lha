import "../css/estilos.css";

const Filter = ({ handled, filter }) => {
  return (
    <>
      <div className="filter-container">
        <span className="filter-label">Filter:</span>
        <input
          className="filter-input"
          value={filter}
          onChange={handled}
          placeholder="Search contact..."
        />
      </div>
    </>
  );
};

export default Filter;
