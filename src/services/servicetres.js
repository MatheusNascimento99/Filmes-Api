export const fetchIpMan = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=ip%20man');
    const res = await req.json();
    return res.Search[0];
}

export const fetchProtector = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=protector');
    const res = await req.json();
    return res.Search[0];
}

export const fetchSamurai = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=samurai');
    const res = await req.json();
    return res.Search[0];
}

export const fetchSectionMarcial = async () => { // função para exportar todas as respostas das reqiuisições;
    const data = [];                  // criando array vazio para inserir lista de objetos;
    // declarando os objetos(nesse caso funções) que serão inseridos;
    const data1 = await fetchProtector();
    const data2 = await fetchIpMan();
    const data3 = await fetchSamurai();

    data.push(data1, data2, data3);    // inserindo os objetos(funções) no array que estava vazio chamado "data";
    return data                       // retornando "data" com o array com os links, agora SectionMarcial, possui as 3 listas de objs
}

