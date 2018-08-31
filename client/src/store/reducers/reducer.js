// import uuid from 'uuid';
const INITIAL_STATE = {
    manufacturer: [],
    loading:false,
    list:[]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_ITEMS":
        return {
            ...state,
            manufacturer:action.payload,
            loading:false
        
        }

        case "ADD_ITEM":
        return {
            ...state,
            manufacturer:[action.payload,...state.manufacturer]
        }

        case "DELETE_ITEM":
        return {
            ...state,
            manufacturer:[...state.manufacturer.filter(i=> i.id!=action.payload)]
        }
        case "EDIT_ITEM":
        return {
            ...state
       }

       default:
            return state;
    }

}