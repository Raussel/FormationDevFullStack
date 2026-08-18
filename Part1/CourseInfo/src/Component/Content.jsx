const Part = (props) => {
  return (
    <>
      <p>{props.names} {props.values}</p>
    </>
  );
};

const Content = () => {
  console.log("Code Du Contenue");
  return (
    <div>
      <Part names="Fundamentals of React"  values="10"/>
      <Part names="Using props to pass data" values="7"/>
      <Part names="State of a component" values="14"/>
    
    </div>
  );
};

export default Content

