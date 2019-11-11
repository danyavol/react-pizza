export default function Prods(state,action) {
    if (state === undefined) state = { original:[], output:[] };
    if (action.type !=undefined ) {
        switch (action.type){
            case "PRODS_ORIGINAL_ADD" : {
                if (Array.isArray(action.data)) {
                    let newState = Object.assign({},state);
                    newState.original = [...state.original, ...action.data];
                    return newState;
                } else {
                    let newState = Object.assign({},state);
                    newState.original = [...state.original, action.data];
                    return newState;
                }
            }

            case "PRODS_OUTPUT_SET" : {
                if (Array.isArray(action.data)) {
                    let newState = Object.assign({},state);
                    newState.output = [...action.data];
                    return newState;
                } else {
                    let newState = Object.assign({},state);
                    newState.output = [action.data];
                    return newState;
                }
            }

            default : {
                return state
            }
        }
    }
    return state
}
