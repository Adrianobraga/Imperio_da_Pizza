import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Destaques from "./components/Destaques";
import Cardapio from "./components/Cardapio";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";
import "./index.css"
 
function App() {
  return (
    <>
      <Menu />
      <Hero />
      <Destaques />
      <Cardapio />
      <Sobre />
      <Contato />
      <Rodape />
    </>
  );
}
 
export default App;