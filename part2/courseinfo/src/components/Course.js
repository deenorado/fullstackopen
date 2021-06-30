import React from "react";

const Course = ({ course }) => {
  let total = 0;

  course.parts
    .map((part) => part.exercises)
    .forEach((element) => {
      total += element;
    });

  return (
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
        <strong>total of {total} exercises</strong>
      </p>
    </>
  );
};

export default Course;
