const Hello = (props) => {
  return (
    <div>
      <p>
        {" "}
        Hello {props.name},you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai"></a>
    </div>
  );
};

const App = () => {
  const friends = ["Peter", "Maya"];
  return (
    <div>
      <p>{friends}</p>
      <Hello />
      <Footer />
    </div>
  );
};




// Les Fonctions

const average = (a,b) => {
  console.log(a)
  console.log(b)
  return(
    (a+b)/2
  )
}

const result = average(12.6,15)
console.log(result)


export default App
