import React, { useState } from "react";

const NewAnecdote = ({ arr, selected, votes, handleVote, handleNew }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{arr[selected]}</div>
      {votes[selected] === undefined ? (
        <p>has 0 votes</p>
      ) : (
        <p>has {votes[selected]} votes</p>
      )}
      <Button onClick={handleVote} text={"vote"} />
      <Button onClick={handleNew} text={"new anecdote"} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const AnectodeOfTheDay = ({ arr, votes }) => {
  if (Object.keys(votes).length === 0) {
    return (
      <>
        <h1>Anecdote with the most votes</h1>
        <p>No votes at the moment</p>
      </>
    );
  } else {
    const bestAnecdoteArr = { ...votes };
    const bestAnecdoteIndex = Object.keys(bestAnecdoteArr).reduce((a, b) =>
      bestAnecdoteArr[a] > bestAnecdoteArr[b] ? a : b,
    );

    return (
      <>
        <h1>Anecdote with the most votes</h1>
        <p>{arr[bestAnecdoteIndex]}</p>
        <p>has {votes[bestAnecdoteIndex]} votes</p>
      </>
    );
  }
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({});

  const voteAnecdote = () => {
    setVote({ ...vote, [selected]: (vote[selected] ?? 0) + 1 });
    console.log(vote);
  };

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <>
      <NewAnecdote
        arr={anecdotes}
        selected={selected}
        votes={vote}
        handleVote={voteAnecdote}
        handleNew={newAnecdote}
      />
      <AnectodeOfTheDay arr={anecdotes} votes={vote} />
    </>
  );
};

export default App;
