import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/Api";

import './Filmes.css';

import { toast } from "react-toastify";
const Filmes = () => {
  // importando um parâmetro necessário com useParams
  const {id} = useParams();
  const [filme, setFilme] = useState({});
  const [load, setLoad] = useState(true);
  const navigate = useNavigate()
 // useEffect para que a requisição seja feita sempre que abrir a página
  useEffect(() =>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: '35674ffe8e9fdc174d122e65010df406',
          language: 'pt-BR'
        }
      })
      .then((response) =>{
        setFilme(response.data);
        setLoad(false)
      })
      .catch(()=>{
        
        navigate("/" , {replace:true});
      })
    }
     loadFilme()
  }, [navigate, id])
  function salvarFilmes (){
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || []
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
    if(hasFilme){
      toast.warn("Filme já consta na lista")
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
    toast.success("Filme Salvo")
  }

  if (load){
    return(
      <div className="filme-info">
        <h1>Carregando Detalhes...</h1>

      </div>
    )
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <strong>Data de lançamento:{filme.release_date}</strong>
       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt ={filme.title}/>
       <h3>Sinopse</h3>
       <span>{filme.overview}</span>
       <strong>Avaliação: {filme.vote_average} /10</strong>
       <div className="area-buttons">
        <button onClick={salvarFilmes}>Salvar</button>
        <button>
          <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title}`}>Trailer</a>
        </button>
       </div>
    </div>
  )
}

export default Filmes