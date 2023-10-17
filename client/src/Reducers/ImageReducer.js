export const ImageReducer = (state, action) => {
    switch (action.type) {
        case "SETALLDATA":
            return {
                ...state,
                allData: action.payload
            }

        case "SETSEARCHDATA":
            
            console.log("payload", action.payload?.results);
            return {
                ...state,
                searchData: action.payload?.results
            }

        case "SEARCH":
            return {
                ...state,
                search:true
            }

            case "SETLOADING":
                return{
                    ...state,
                    loading:true
                }

            case "REMOVELOADING":
                return{
                    ...state,
                    loading:false
                }

        default:
            return state;
    }
}
