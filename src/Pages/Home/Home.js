
import { useState, useEffect } from 'react';
import api from '../../Services/Api';
import {Link} from 'react-router-dom';
import './Home.css'


function Home  ()  {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)
   // fazendo a requisição (o useEffect vai garantir que não haja alteração ao recarregar a página)
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing" , {
                params:{
                    api_key:'35674ffe8e9fdc174d122e65010df406',
                    language:"pt-BR",
                    page:1,
                }
            })
            setFilmes(response.data.results.slice(0, 10))

        } 

        loadFilmes();

    }, [])
    if (loading){
        <div className='Loading'>
            <h2>Carregando...</h2>

        </div>

    }
    
  return (
    <div className='container'>
    <div className='Lista-filmes'>
        {filmes.map((filme) =>{
            return(
                <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                <Link className='link' to={`/filme/${filme.id}`}>Detalhes</Link>

                </article>
            )
        })}

    </div>
    </div>
  )
}

export default Home