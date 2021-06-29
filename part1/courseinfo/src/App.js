import React from "react";

const course = "Half Stack application development";
const part1 = {
  name: "Fundamentals of React",
  exercises: 10,
};
const part2 = {
  name: "Using props to pass data",
  exercises: 7,
};
const part3 = {
  name: "State of a component",
  exercises: 14,
};

const Header = (props) => {
  const { course } = props;
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = (props) => {
  const { name, exercises } = props.part;

  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  const { part1, part2, part3 } = props;
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
};

const Total = (props) => {
  const { part1, part2, part3 } = props;
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
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

export default App;
