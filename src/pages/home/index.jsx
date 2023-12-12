import { useEffect, useState } from "react";
import { fetchSection } from "../../services/services";
import { fetchSectionA } from "../../services/servicedois";
import { fetchSectionMarcial } from "../../services/servicetres";
import Card from "../../components/card";



function Home() {
    
    const [filmes, setFilmes] = useState(null);
    const [filmesA, setFimmesA] = useState(null);
    const [filmesM, setFilmesM] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSection();
            setFilmes(data);

            const dataA = await fetchSectionA();
            setFimmesA(dataA);

            const dataM = await fetchSectionMarcial();
            setFilmesM(dataM);
        }; 
        fetchData();
    }, [])


    if (!filmes || !filmesA || !filmesM) {
        return (
            <span> Não há filme! </span>
        )
    }


    return (
        <div className="container">
            <div className="row">
                {
                    filmes.map((e, i) => (
                       <Card filmes={e} key={i}/>
                    ))
                }
            </div>
            <div className="row">
                {
                    filmesA.map((e, i) => (
                        <Card filmes={e} key={i}/>
                        
                    ))
                }
            </div>
            <div className="row">
                {
                    filmesM.map((e, i) => (
                        <Card filmes={e} key={i}/>
                    ))
                }
            </div>
                        
        </div>
    )
}

export default Home;