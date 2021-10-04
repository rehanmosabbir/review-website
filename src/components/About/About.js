import React from "react";

const About = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h2>About us</h2>
        <p>Learn more about Capstone Education</p>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 py-5">
            <h3>Who we are?</h3>
            <p>
              Capstone was founded in 2013 by three young Engineers while
              studying MBA in IBA DU. Capstone is the pioneer of education
              blogging in Bangladesh. So far, Capstone has published more 150
              articles to help students acing the IBA admission test, IELTS
              test, BCS, and Job exams. To make education more affordable &
              productive, Capstone offers life-time studentship validity( a
              student can repeat the course as many times as he wants) in many
              of its courses.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.capstonebd.com/wp-content/uploads/2018/11/44956980_258252524837738_7269031796845576192_n-700x640.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
