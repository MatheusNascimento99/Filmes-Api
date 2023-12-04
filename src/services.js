export const fetchLotR = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=lord');
    const res = await req.json();
    return res.Search[2]
}


export const fetchMaverik = async () => {
    const req = await fetch ('https://www.omdbapi.com/?apikey=58eeaad1&s=maverick');
    const res = await req.json();
    return res.Search[0]
}

export const fetchBRunner = async () => {
    const req = await fetch ('https://www.omdbapi.com/?apikey=58eeaad1&s=runner');
    const res = await req.json();
    return res.Search[1];
}