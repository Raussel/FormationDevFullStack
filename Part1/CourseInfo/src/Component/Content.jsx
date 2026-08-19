import Part from "./Part";

const Content = (props) => {
  console.log("Code Du Contenue");
  return (
    <div>
      {props.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
