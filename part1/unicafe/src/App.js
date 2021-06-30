import React, { useState } from "react";

const FeedbackHeader = () => {
  return <h1>give feedback</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const FeedbackSection = ({ incGood, incNeutral, incBad }) => {
  return (
    <>
      <FeedbackHeader />
      <Button onClick={incGood} text={"good"} />
      <Button onClick={incBad} text={"neutral"} />
      <Button onClick={incNeutral} text={"bad"} />
    </>
  );
};

const StatisticsHeader = () => {
  return (
    <>
      <h1>statistics</h1>
    </>
  );
};

const StatisticsData = (props) => {
  return (
    <>
      <p>
        {props.name} {props.stat}
      </p>
    </>
  );
};

const StatisticsSection = (props) => {
  return (
    <>
      <StatisticsHeader />
      <StatisticsData name={"good"} stat={props.good} />
      <StatisticsData name={"neutral"} stat={props.neutral} />
      <StatisticsData name={"bad"} stat={props.bad} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => {
    setGood(good + 1);
  };

  const incBad = () => {
    setBad(bad + 1);
  };

  const incNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <FeedbackSection
        incGood={incGood}
        incNeutral={incNeutral}
        incBad={incBad}
      />
      <StatisticsSection good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
