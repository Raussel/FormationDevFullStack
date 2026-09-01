import { useState } from "react";
import Statistics from "./Component/Statistics";
import Button from "./Component/Button"
import './App1.css'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const all = good + neutral + bad;

  const average = all === 0 ? 0 : (good - bad) / all;// triple egal permet de tester en plus de la valeur le type d'une variable

  const positive = all === 0 ? 0 : (good / all) * 100;

  const mauvais = all === 0 ? 0 : (bad / all) * 100;
  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        mauvais={mauvais}
      />
    </div>
  );
};

export default App;
