import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="py-5">
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <h5 className="text-uppercase">Let's be Friends!</h5>
            <p className="text-small text-muted mb-0">
              Some random text over here. Lorem Ipsum maybe
            </p>
          </div>
          <div className="col-lg-6">
            <form action="#">
              <div className="input-group flex-column flex-sm-row mb-3">
                <input
                  className="form-control form-control-lg py-3"
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    className="btn btn-dark btn-block"
                    id="button-addon2"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
