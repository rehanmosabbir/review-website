import React from "react";

const About = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h2>About us</h2>
        <p>Learn more about Rehan's Educare</p>
      </div>
      <hr className="w-50 m-auto" />
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 py-5">
            <h3 className="display-4 mb-4">Who we are?</h3>
            <p className="pe-5">
              Rehan's Educare was founded in 2013 by three young Engineers while
              studying MBA in IBA DU. Rehan's Educare is the pioneer of
              education blogging in Bangladesh. So far, Rehan's Educare has
              published more 150 articles to help students acing the IBA
              admission test, IELTS test, BCS, and Job exams. To make education
              more affordable & productive, Rehan's Educare offers life-time
              studentship validity( a student can repeat the course as many
              times as he wants) in many of its courses.
            </p>
            <p className="pe-5">
              At Rehan's Educare, we believe there is a better way to provide
              education. A more interesting and effective way where students can
              learn rather than just attend classes. We’re obsessively
              passionate about it, and our mission is to help students achieve
              their dream. We focus on students’ learning. Learning has been the
              least emphasized aspect of our education and we see that as an
              opportunity: We’re excited to simplify Education for everyone
              through our guidance, care, and inspiration.
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid mt-5"
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
