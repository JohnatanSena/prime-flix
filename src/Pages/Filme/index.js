import { useEffect, useState } from "react"
import api from "../../Service"
import { useParams } from "react-router-dom"

function Filme(){
  const { id } = useParams()
  const [filme, setFilmes] = useState()
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
        setFilmes(console.log(response))
      })
      .catch(() => {
        console.log('filme não encontrado')
      })
    }
    detaisFilms()
    return () => {
      console.log('Componente Desmontado')
    }
  }, [])

  return (
    <div>
      <h1> Veja seus Filmes Favoritos abaixo: </h1>
      <h1>{console.log(filme)}</h1>
      <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>
    </div>
  )
}
export default Filme