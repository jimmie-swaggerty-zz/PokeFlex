import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Elements/Header'
import PokeThumbSmall from '../components/Elements/PokeThumbSmall'

const AllPokemon = (props) => {
    const [pokes, setPokes] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                console.log(res.data.results);
                setPokes(res.data.results);
                setLoaded(true);
            })
            .catch(err=>{
                console.log("catch error: "+err)
            })
    }, []);
    return(
        
            <div>
                <Header title="All Pokemon"/>
                {loaded && pokes.map((species, idx)=>{
                    return(
                        <PokeThumbSmall url={species.url} key={idx}/>
                    )
                })}
            </div>
        
    )
}

export default AllPokemon