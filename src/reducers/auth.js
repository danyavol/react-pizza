export default function Auth(state=false, action) {
    if (action.type !== undefined ) {
        switch (action.type){
            case "LOG_IN" : {
               return true;
            }

            case "LOG_OUT": {
                return false;
            }

            default : {
                return state
            }
        }
    }
    return state
}
