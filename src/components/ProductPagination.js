import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

function ProductPagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center justify-content-lg-end">
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductPagination;
