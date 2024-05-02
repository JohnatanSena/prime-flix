import { Link } from "react-router-dom"
import './erro.css'
function Erro(){
  return(
    <div className="not-found">
      <h1>404</h1>
      <p>Essa página não existe</p>
      <Link to="/">Página de Filmes</Link>
    </div>
  )
}
export default Erro