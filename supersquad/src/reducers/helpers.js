import character_json from '../data/characters.json';

export const createCharacter = (id) => {
    let character = character_json.find((item) => item.id === id);
    return character;
}