import { useEffect, useState } from "react"
import api from "../../Service"
import { useParams } from "react-router-dom"
import './info-filmes.css'

function Filme(){
  const { id } = useParams()
  const [filmes, setFilmes] = useState({})
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function detaisFilms(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '7b235278b33f2cf0f099fa70acc4bd35',
          language: 'pt-BR',
        }
      })
      .then((response) => {
        setFilmes(response.data)
        console.log(response.data)
      })
      .catch(() => {
        console.log('filme não encontrado')
      })
    }
    detaisFilms()
  
  }, [])

  return (
    <div className="filme-details">
      <h1 className="text-page"> Veja seus Filmes Favoritos abaixo: </h1>
      <h1 className="movie-title">{filmes.title}</h1>
      <img src={`http://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.id}></img>
      <h3>Sinapse</h3>
      <p className="sinapse-text">{filmes.overview}</p>
      <h3 className="release">Lançamento: {filmes.release_date}</h3>
      <h3 className="average"> Avaliação: {filmes.vote_average} / 10</h3>

      <div className="area-buttons">
      <button className="btn-save"> Salvar </button>
      <button className="btn-trailer">
        <a href="#"> Trailer </a>
      </button>
      </div>

    </div>
  )
}
export default Filme