const SearchBar = () => {
  return (
    <header className="search-bar">
      <h1>Art Gallery</h1>
      <div className="search-area">
        <input type="text" placeholder="Search here..." />
        <button className="primary-btn">
          <i className="fa fa-search"></i> Search
        </button>
      </div>
    </header>
  );
};

export default SearchBar;
