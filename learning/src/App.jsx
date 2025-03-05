import List from "./list.jsx";
import "./index.css"
import Home from "./home.jsx"
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
    </>
  );
  
}

export default App