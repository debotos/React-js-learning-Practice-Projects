export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export const addCharacterById = (id) => ({
    type: ADD_CHARACTER,
    id
});

export const removeCharacterById = (id) => ({
    type: REMOVE_CHARACTER,
    id
});