export const ADD_TO_CATALOGUE = 'ADD_TO_CATALOGUE'
export const UPDATE_CAT = 'UPDATE_CAT'

export const addToCatCatalogue = (cat) => ({
    type: ADD_TO_CATALOGUE,
    cat,
})

export const updateCat = (cat) => ({
    type: UPDATE_CAT,
    cat,
})

