import { useEffect, useState } from "react";
import { fetchBRunner, fetchLotR, fetchMaverik } from "../../services";


function Home () {

    const [filme1, setFilme1] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchLotR();
            setFilme1(data)
        };
        fetchData();
    }, [])

    const [filme2, setFilme2] = useState(null);

    useEffect(() => {
        const fetchData2 = async () => {
            const data = await fetchMaverik();
            setFilme2(data);
        };
        fetchData2();
    }, [])

    const [filme3, setFilme3] = useState(null);

    useEffect(() => {
        const fetchData3 = async () => {
            const data = await fetchBRunner();
            setFilme3(data);
        };
        fetchData3();
    }, [])

    if(!filme1 && !filme2 && !filme3 ){
        return (
            <span> Não há filme! </span>
        )
    }

    
    return(
        <div>   
            <div >
                <h2>{filme1.Title}</h2>
                <img src={filme1.Poster} alt="" />
            </div>
            <div >
                <h2>{filme2.Title}</h2>
                <img src={filme2.Poster} alt="" />
            </div>
            <div >
                <h2>{filme3.Title}</h2>
                <img src={filme3.Poster} alt="" />
            </div>
           

        </div>
    )
}

export default Home;