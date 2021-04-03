import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header>
      {/* <form action="">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className="form-controls"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-primary">Search</button>
      </form> */}
    </header>
  );
};

export default Header;
