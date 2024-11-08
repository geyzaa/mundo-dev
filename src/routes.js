import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobremim";
import Rodape from "componentes/rodape";




function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

//fora da tag routes, o menu fica fixo em todas as pag da aplicação