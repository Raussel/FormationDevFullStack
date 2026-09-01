import Statisticline from "./Statisticline";

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <Statisticline text="good" value={props.good} /> 
          <Statisticline text="neutral" value={props.neutral} />
          <Statisticline text="bad" value={props.bad} />
          <Statisticline text="all" value={props.all} />
          <Statisticline text="average" value={props.average} />
          <Statisticline text="positive" value={props.positive + " %"} />
          <Statisticline text="mauvais" value={props.mauvais + " %"} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
