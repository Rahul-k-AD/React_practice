import List from "./list";
import "./index.css"
import Home from "./home"
import test from "./components/class"
function App() {
  return (
   <>
   <h1>Dojo</h1>
    <div className="container">
      <ul className="list">
      <List />
    </ul>
    </div>
    <div className="layer">
    <br />
    <br />
    
      Username:
      <br />
    <input type="text" placeholder="Enter your username"/>
    <button>Add</button>
    </div>
    <Home />
    <br />
    <h1>This is a class component test</h1>
    <test />
    </>
  );
  
}

export default App