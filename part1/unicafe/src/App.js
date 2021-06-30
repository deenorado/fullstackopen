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

const StatisticsData = ({ name, stat }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{stat}</td>
      </tr>
    </>
  );
};

const StatisticsSection = ({ good, neutral, bad }) => {
  const goodScore = 1;
  const neutralScore = 0;
  const badScore = -1;
  const total = good + neutral + bad;
  const average =
    goodScore * good + neutralScore * neutral + (badScore * bad) / 3;
  const percentPositive = good / total;

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <StatisticsHeader />
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <StatisticsHeader />
      <table>
        <StatisticsData name={"good"} stat={good} />
        <StatisticsData name={"neutral"} stat={neutral} />
        <StatisticsData name={"bad"} stat={bad} />
        <StatisticsData name={"all"} stat={total} />
        <StatisticsData name={"average"} stat={average} />
        <StatisticsData
          name={"positive"}
          stat={isNaN(percentPositive) ? "0" : percentPositive}
        />
      </table>
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
