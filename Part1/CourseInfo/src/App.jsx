const Header = (props) => {
        console.log('Code pour le Header')
        return (
          <div>
            <h1>{props.name}</h1>
          </div>
        )
}

const Part1 = () => {
     return (
      <div>
        <p>Fundamentals of React 10</p>
      </div>
     )
      
}

const Part2 = () => {
     return (
      <div>
        <p>Using props to pass data 7</p>
      </div>
     )
      
}

const Part3 = () => {
     return (
      <div>
        <p>State of a component 14</p>
      </div>
     )
      
}

const Content = () => {
        console.log('Code Du Contenue')
        return(
          <div>
              <Part1/>
              <Part2/>
              <Part3/>
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
      <Content/>
      <Total value={10 + 7 + 14}/>
    </div>
  
   )
}
export default App
