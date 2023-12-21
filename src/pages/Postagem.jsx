import { useParams } from "react-router-dom";
import Titulo from "../components/Titulo";
import Campo from "../components/Campo";
import Conteudo from "../components/Conteudo";

export default function Postagem() {
  const {nome, descricao} = useParams()

  return<>
    <Titulo nome="Mergulhando no react"/>
    <Campo>
      <Conteudo foto="/pessoa3.jpg" nome={"@" + nome} descricao={descricao}/>
    </Campo>
  </>
} 