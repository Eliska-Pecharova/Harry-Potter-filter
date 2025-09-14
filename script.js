// https://hp-api.onrender.com/api/characters
const inputCharName = document.querySelector(".character-name");
const characterSection = document.querySelector(".characters");

const addCharacterToWebsite = (image, name) => {
  const div = document.createElement("div");
  div.classList.add("character-box");

  const img = document.createElement("img");
  img.src = image;
  div.append(img);

  const p = document.createElement("p");
  p.textContent = name;
  div.append(p);

  return div;
};

const renderCharacters = (characters) => {
  characterSection.textContent = "";
  characters.forEach((character) => {
    if (character.image) {
      const characterProfile = addCharacterToWebsite(
        character.image,
        character.name
      );
      characterSection.append(characterProfile);
    }
  });
};

const getAllCharacters = () => {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      inputCharName.addEventListener("input", () => {
        const inputValue = inputCharName.value.toLowerCase();

        const filteredCharacters = data.filter((oneCharacter) => {
          return oneCharacter.name.toLowerCase().includes(inputValue);
        });

        renderCharacters(filteredCharacters);
      });

      renderCharacters(data);
    });
};
getAllCharacters();
