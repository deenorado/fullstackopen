import React from "react";

const Course = ({ course }) => {
  return (
    <>
      {course.map((course) => (
        <>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map((part) => {
              return (
                <li key={part.id}>
                  {part.name} {part.exercises}
                </li>
              );
            })}
          </ul>
          <p>
            <strong>
              total of{" "}
              {course.parts.reduce((prev, curr) => prev + curr.exercises, 0)}{" "}
              exercises
            </strong>
          </p>
        </>
      ))}
    </>
  );
};

export default Course;
