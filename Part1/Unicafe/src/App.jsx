import {useState} from 'react'


// const Button = (props) => (
//   <button onClick={props.handleClick}>
//       {props.text}
//   </button>
// )
const App = () => {
      const [good,setGood] = useState(0)
      const [neutral,setNeutral]= useState(0)
      const [bad,setBad] = useState(0)

      const handleGood = () =>  setGood(good + 1)
      const handleNeutral = () => setNeutral(neutral + 1)
      const handleBad = () => setBad(bad + 1)
      return (
        <div> 
          <h1>Give FeedBack</h1>
          <button onclick={handleGood}>Good</button>
           <button onclick={handleNeutral}>Neutral</button>
            <button onclick={handleBad}>Bad</button>
          <h1>Statistics</h1>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
        </div>

      )
}

export default App