import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i class="material-icons brand-icon">Recipe Finder</i>
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          size={30}
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <span>
          <br />
        </span>
        <div class="input-group-append">
          <button className="btn btn-green" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
