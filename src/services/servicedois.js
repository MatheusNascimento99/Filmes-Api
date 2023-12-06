export const fetchSoul = async () =>{
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=soul');
    const res = await req.json();
    return res.Search[0];
}

export const fetchAkira = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=akira');
    const res = await req.json();
    return res.Search[0];
}

export const fetchTkl = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=lion');
    const res = await req.json();
    return res.Search[0];

}

export const fetchSectionA = async () => {
    const data =[];

    const data1 = await fetchSoul();
    const data2 = await fetchAkira();
    const data3 = await fetchTkl();

    data.push(data1, data2, data3);
    return data
}