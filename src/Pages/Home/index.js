import { useEffect, useState } from "react"
import api from "../../Service"
import { Link } from 'react-router-dom'
import './home.css'

function Home(){
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
   async function loadFilmes(){
      const response = await api.get('https://api.themoviedb.org/3/movie/popular', {
        params:{
          api_key: '7b235278b33f2cf0f099fa70acc4bd35',
          language: 'pt-BR',
          page: 1
        }  
      })
      setFilmes(response.data.results.slice(0, 10))
    }
    loadFilmes()
    timeOutLoading()
  }, [])
  if(loading){
    return(
      <div className="loading">
        <h1>Carregando Filmes, aguarde... </h1>
      </div>
    )
  }
  function timeOutLoading() {
    setTimeout(function() {
      setLoading(false);
    }, 1000);
  }
  return(
    <div className="listFilmes">
      <h1> Bem vindo a página Home </h1>
      {filmes.map((filme) =>{
        return(
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.id}></img>
            <Link to={`/Filme/${filme.id}`}>Acessar</Link>
          </article>
        )
      })}
    </div>
  )
}
export default Home