import { useEffect, useState } from "react";
import { fetchSection } from "../../services/services";
import { fetchSectionA } from "../../services/servicedois";
import { fetchSectionMarcial } from "../../services/servicetres";



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
                        <div className="col-md-4" key={i}>
                            <h5>
                                {e.Title}
                            </h5>
                            <p>{e.Year}</p>
                            <p>{e.Type}</p>
                            <img src={e.Poster} />
                        </div>
                    ))
                }
            </div>
            <div className="row">
                {
                    filmesA.map((e, i) => (
                        <div className="col-md-4" key={i}>
                            <h5>
                                {e.Title}
                            </h5>
                            <p>{e.Year}</p>
                            <p>{e.Type}</p>
                            <img src={e.Poster} />
                        </div>
                    ))
                }
            </div>
            <div className="row">
                {
                    filmesM.map((e, i) => (
                        <div className="col-md-4" key={i}>
                            <h5>
                                {e.Title}
                            </h5>
                            <p> {e.Year} </p>
                            <p> {e.Type} </p>
                            <img src={e.Poster} />
                        </div>
                    ))
                }
            </div>
                        
        </div>
    )
}

export default Home;