import React, { Component } from "react";

class EmployeeDashboard extends Component {
  render() {
    return (
      <div className="container">
        <section className="employee-review">
          <h3 className="page-heading">Review Employees</h3>
          <div className="article-group">
            <article className="card">
              <div className="card__head">
                <img src="http://placeholder.pics/svg/150X100" alt="img" />
              </div>
              <div className="card__body">
                <div className="name">Employee Name</div>
                <div className="title">Designation</div>
                <div className="info">
                  Manages the engineering team of product developement
                </div>
              </div>
              <div className="card__footer flexCenter">
                <button className="button button--dark">
                  <i class="far fa-star"> </i> Add Review
                </button>
              </div>
            </article>
            <article className="card">
              <div className="card__head">
                <img src="http://placeholder.pics/svg/150X100" alt="img" />
              </div>
              <div className="card__body">
                <div className="name">Employee Name</div>
                <div className="title">Designation</div>
                <div className="info">
                  Manages the engineering team of product developement
                </div>
              </div>
              <div className="card__footer flexCenter">
                <button className="button button--dark">
                  <i class="far fa-star"> </i> Add Review
                </button>
              </div>
            </article>
            <article className="card">
              <div className="card__head">
                <img src="http://placeholder.pics/svg/150X100" alt="img" />
              </div>
              <div className="card__body">
                <div className="name">Employee Name</div>
                <div className="title">Designation</div>
                <div className="info">
                  Manages the engineering team of product developement
                </div>
              </div>
              <div className="card__footer flexCenter">
                <button className="button button--dark">
                  <i class="far fa-star"> </i> Add Review
                </button>
              </div>
            </article>
            <article className="card">
              <div className="card__head">
                <img src="http://placeholder.pics/svg/150X100" alt="img" />
              </div>
              <div className="card__body">
                <div className="name">Employee Name</div>
                <div className="title">Designation</div>
                <div className="info">
                  Manages the engineering team of product developement
                </div>
              </div>
              <div className="card__footer flexCenter">
                <button className="button button--dark">
                  <i class="far fa-star"> </i> Add Review
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default EmployeeDashboard;
