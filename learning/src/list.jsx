function List(props) {
  return (
    <ul style={{
      listStyle: "none",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      
    }}>
      {props.animals.map((animal) => (
        <ListItem key={animal} animal={animal} />
      ))}
    </ul>
  );
}
function ListItem(props) {
  return <li>{props.animal}</li>;
}

function App() {
  const animals = ["Lion", "Tiger", "Cow", "Goat","Pig"];
  return (
    <div>
      
      <List animals={animals} />
    </div>
  );
}

export default App;
