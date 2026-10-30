const URL = "http://localhost:3000/api/onepiece";



window.onload = async function() {
    const characters = await getCharacters();
    const container = document.getElementById("character-container");
    const paginationContainer = document.getElementById("pagination-container");
    const itemsPerPage = 10;
    let currentPage = 1;
    
    function renderCharacters(page) {
        container.innerHTML = "";
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const charactersToShow = characters.slice(startIndex, endIndex);
        
        charactersToShow.forEach(async (character) => {
            const characterDiv = document.createElement("div");
            characterDiv.classList.add("character");
            
            const imageUrl = await getImage(character.name);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            characterDiv.appendChild(imageElement);
            
            const nameElement = document.createElement("h3");
            nameElement.textContent = character.name;
            characterDiv.appendChild(nameElement);
            
            const activeBounty = character.bounties.find(bounty => bounty.is_active);
            if (activeBounty) {
                const bountyElement = document.createElement("p");
                bountyElement.textContent = `Bounty: ${activeBounty.amount}`;
                characterDiv.appendChild(bountyElement);
            }

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", (event) => {
                if (event.target.checked) {
                   
                } else {
                    
                }
            });
            characterDiv.appendChild(checkbox);




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