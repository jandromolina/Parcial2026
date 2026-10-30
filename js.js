const URL = "https://onepieceapi.com/api"

async function getCharacters() {
    const resposta = await fetch(`${URL}characters`);
    const data = await resposta.json();
    const llista = data.results;
    return llista;
}

async function getName() {
    const resposta = await fetch(`${URL}characters/${name}`);
    const data = await resposta.json();
    return data;
}



async function getImage(name) {
    const resposta = await fetch(`${URL}characters/${name}`);
    const data = await resposta.json();
    const imageUrl = data.image_url;
    return imageUrl;
}

window.onload = async function() {
    const characters = await getCharacters();
    const llist = document.getElementById("llista");
   
    for(let i = 0; i < characters.length; i++) {
        const charItem = this.document.createElement('li');
        charItem.innerText = characters[i].name;