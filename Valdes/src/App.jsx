const Hello = (props) => {
   return(
    <div>
      <p> Hello {props.name},you are {props.age} years old</p>
    </div>
   )

}


const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">
      </a>
    </div>
  )
}

const App = () => {
  const friends = ['Peter','Maya']
  return(
    <div>
      <p>{friends}</p>
      <Hello />
      <Footer/>
    </div>
  )
}
 

export default App
