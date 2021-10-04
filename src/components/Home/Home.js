import React from "react";

const Home = () => {
  return (
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <div className="p-5 fw-bold text-white text-center">
          <h2 className="display-3 fw-lighter">Welcome to Rehan's Educare</h2>
          <div className="w-75 m-auto  text-black fw-lighter">
            <p>
              To help students achieve the highest success by providing quality
              education, guidance, care & inspiration
            </p>
          </div>
          <button className="btn btn-danger btn-lg">Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Home;
