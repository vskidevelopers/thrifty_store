import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end ">
                <i className="fa fa-truck fa-10x"></i>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Free shipping</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="d-inline-block">
              <div className="media align-items-end">
                {/* <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use xlinkHref="#helpline-24h-1"></use>
                </svg> */}
                <i className="fa fa-phone" aria-hidden="true"></i>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-inline-block">
              <div className="media align-items-end">
                {/* <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use xlinkHref="#label-tag-1"></use>
                </svg> */}
                <i className="fa fa-tags" aria-hidden="true"></i>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Festival offer</h6>
                  <p className="text-small mb-0 text-muted">
                    Free shipping worlwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
