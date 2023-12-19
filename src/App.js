import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav storeName="Dragon's Book Store" />
      <Welcome storeName="Dragon's Book Store" />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
