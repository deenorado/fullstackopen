import React from "react";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

const Header = (props) => {
  const { course } = props;
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = ({ part }) => {
  const { name, exercises } = part;
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
};

const Total = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];
  return (
    <>
      <p>
        Number of exercises{" "}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </>
  );
};

const App = () => {
  const { name, parts } = course;
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
