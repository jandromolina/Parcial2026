const URL = "https://bn9ct5dd-3000.uks1.devtunnels.ms/"



window.onload = async function() {
    const characters = await getCharacters();
    const llist = document.getElementById("llista");
   


    
    
    

}

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