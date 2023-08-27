import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const greeting = "Bienvenido a mi E-commerce";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
}

export default App;
