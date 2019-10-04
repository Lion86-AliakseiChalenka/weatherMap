const SET_CITY = 'SET_CITY/weather'

//Creation Action Creators
export const setCity = (city) => ({type: SET_CITY, city})

const initialState = {
    city: null
}

export const reducer = (state=initialState, action) =>
{
    switch (action.type) {
        case SET_CITY:
            return {...state, city: action.city}
        default:
            return {...state}
    }
}

export default reducer