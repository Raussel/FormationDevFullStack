const Header = (props) => {
        console.log('Code pour le Header')
        return (
          <div>
            <h1>{props.name}</h1>
          </div>
        )
}
const Content = (props) => {
        console.log('Code Du Contenue')
        return(
          <div>
            <p>{props.name} {props.number}</p>
          </div>
        )
}
const Total = (props) => {
      console.log('Fonction pour calculer un Total')
      return(
        <div>
          <p>Number of Exercice {props.value}</p>
        </div>
      )
}











const App = () => {
  console.log('Bonjour ,Valdes Bonne Présentation')

   return(
    <div>
      <Header name="Half Stack application development"/>
      <Content name="Fundamentals of React" number={10}/>
      <Content name="Using props to pass data" number={7}/>
      <Content name="State a component" number={14}/>
      <Total value={10 + 7 + 14}/>
    </div>
  
   )
}
export default App