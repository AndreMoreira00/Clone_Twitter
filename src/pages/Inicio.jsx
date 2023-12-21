import Campo from "../components/Campo";
import Titulo from "../components/Titulo";
import Conteudo from "../components/Conteudo";

export default function Inicio(){
  return <>
    <Titulo nome="Merugulhando no React"/>
    <Campo> 
      <Conteudo 
      foto="/fox.jpg" 
      nome="pessoa@1" 
      descricao="Lorem ipsum"/>

      <Conteudo 
      foto="/gato.jpg" 
      nome="pessoa@2" 
      descricao="Lorem ipsum"/>
    </Campo>
</>
}
