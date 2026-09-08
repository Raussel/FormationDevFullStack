import Part from "./Part";

const Content = ({parts}) => {

  const total = parts.reduce((s,p) => s + p.exercises,0)
  console.log("Code Du Contenue");
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
      <p><b> total of  {total} exercices </b></p>
    </div>
  );
};

export default Content;
