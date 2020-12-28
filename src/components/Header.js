import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header>
      <h1>Art Gallery</h1>
      <h5>Search your perfect Art here!!!</h5>
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className="form-controls"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-primary">Search</button>
      </form>
    </header>
  );
};

export default Header;
