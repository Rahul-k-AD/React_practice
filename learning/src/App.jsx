import List from "./list";
import "./index.css"
import Home from "./home"
import Test from "./components/class"
import Brand from "./brand"
function App(props) {
  

  
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
    <Test />
    <Brand />
     

    </>
  );
  
}

export default App