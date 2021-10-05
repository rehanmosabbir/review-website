import React from "react";

import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCourse from "../SingleService/SingleCourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Our Courses</h2>
        <hr className="w-50 m-auto" />
        <Row xs={1} md={2} className="g-4 mt-5">
          {courses?.map((course) => (
            <SingleCourse course={course} key={course.id}></SingleCourse>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Courses;
