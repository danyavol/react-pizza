export default function Alert(state={},action) {
    if (action.type !== undefined ) {
        switch (action.type){
            case "ALERT_SET" : {
                let newData = JSON.parse(JSON.stringify(state));
                for (let key in action.data) {
                    newData[key] = action.data[key];
                }
                return newData;
            }

            default : {
                return state
            }
        }
    }
    return state
}
