import { useState } from 'react';
//Defining the App component
const App = () => {
  //This block of code defines the anecdotes array,this component should also return JSX
  const anecdot = [
    'If it hurts, do it LESS.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
//USESTATE HOOK==>1-You need to import this hook from your library. 2-You need to define a variable and a function to update the variable. 3-You need to call the useState function and pass the initial value of the variable as an argument.
//In the example below: expected is the variable and setExpected is the function to update the variable. useState(0) is the initial value of the variable.
  const [selection, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdot.length).fill(0));

  //This function generates a random index within the range of the anecdotes array length and updates the selected state with this random index. This effectively changes the currently displayed anecdote to a random one from the array.
  const handleNextAnecdot = () => {
    const randomIndex = Math.floor(Math.random() * anecdot.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selection] += 1;
    setVotes(newVotes);
  };

  const highestVoteCount = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(highestVoteCount);

  return (
    <div>
      <h1>Anecdote Of The Day</h1>
      <p>{anecdot[selection]}</p>
      <p>has {votes[selection]} Votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdot}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>
      {highestVoteCount > 0 ? (
        <div>
          <p>{anecdot[mostVotedIndex]}</p>
          <p>has {highestVoteCount} votes</p>
        </div>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;







