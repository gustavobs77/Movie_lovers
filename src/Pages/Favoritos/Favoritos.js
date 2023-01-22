import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Favoritos.css'

function Favoritos () {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        // pegando os dados dos filmes no local storage
        const minhaLista =localStorage.getItem('@primeflix')
        // transformando os dados JSON 
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])
    // excluir filmes
    function excluirFilmes(id){
        let filtroFilmes = filmes.filter((item) =>{
            return (item.id !== id)
        })
        // setFilmes para tirar o filme excluído do frontend
        setFilmes(filtroFilmes);
        // tirando o filme excluído do local store da API. Convertendo de JSON para String
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido")

    }
  return (
    <div className='meus-filmes'>
        <h1>Meus Filmes</h1>
        {filmes.length === 0 && <span>Não há filmes salvos</span>}
        <ul>
            {filmes.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div className='filmes-btn'>
                            <Link to={`/filme/${item.id}`}>Detalhes</Link>
                            <button onClick={()=> excluirFilmes(item.id)}>Excluir</button>
                        </div>

                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos