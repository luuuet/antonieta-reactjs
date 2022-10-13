import "./App.css";
//import Button from "./components/NavBar/Button/Button";
import AppNav from "./components/NavBar/AppNav";
//mport Container from "./components/Container/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <AppNav />
      <ItemListContainer greetings="Bienvenidos" />
    </div>
  );
}

export default App;
