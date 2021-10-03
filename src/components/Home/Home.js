import React from "react";

const Home = () => {
  return (
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <div className="p-5 fw-bold text-white">
          <h2 className="display-3 fw-lighter">Welcome to TheMealDB</h2>
          <div className="w-75 m-auto  text-black fw-lighter">
            <p>
              An open, crowd-sourced database of Recipes from around the world.
              We also offer a free JSON API for anyone wanting to use it.
            </p>
          </div>
          <button className="btn btn-danger btn-lg ">Details</button>
        </div>
      </div>
    </>
  );
};

export default Home;
