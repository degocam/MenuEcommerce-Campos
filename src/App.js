import { ItemListContainer } from "./components/Home/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <section>
      <NavBar />
      <ItemListContainer  titulo="Disculpe las molestias" imagen="./assets/sitio-en-construccion.jpg"/>
    </section>
  );
}

export default App;
