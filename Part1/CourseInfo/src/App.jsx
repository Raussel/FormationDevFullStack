import Header from "./Component/Header"

import Content from "./Component/Content"

import Total from "./Component/Total"

const App = () => {
  console.log("Bonjour ,Valdes Bonne Présentation");

  return (
    <div>
      <Header name="Half Stack application development" />
      <Content />
      <Total value={10 + 7 + 14} />
    </div>
  );
};
export default App;
