const URL = "https://onepieceapi.com/api"

async function getCharacters() {
    const resposta = await fetch(`${URL}characters`);
    const data = await resposta.json();
    const llista = data.results;
    return llista;
}

window.onload = async function() {
    const