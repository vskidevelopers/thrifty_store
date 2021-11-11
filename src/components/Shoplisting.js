import React from "react";

import "./Shop_listing.css";

function Shoplisting() {
  return (
    <div className="row mb-3 align-items-center">
      <div className="col-lg-6 mb-2 mb-lg-0">
        <p className="text-small text-muted mb-0">Showing 1–12 of 53 results</p>
      </div>
      <div className="col-lg-6">
        <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
          <li className="list-inline-item">
            <select
              className="selectpicker ml-auto form-control"
              name="sorting"
              data-width="200"
              data-style="bs-select-form-control"
              data-title="Default sorting"
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Popularity</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Shoplisting;
