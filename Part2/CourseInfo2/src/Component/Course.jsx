import Header from "./Header";
import Content from "./Content";
console.log("Course Ok");
const Course = ({course}) => {
  //destrucuration : on récupère directement l'objet "course" des props
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};
export default Course;
