import ActionType from "./actionType";

const globalState = {
    data: []
}

const globalReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.ADD_DATA_FROM_URL:
            return {
                data: action.payload
            }
        case ActionType.ADD_DATA:
            console.log(action.payload);
            return {
                data: state.data.concat(action.payload)
            }
        case ActionType.DELETE_DATA:
            let idx = state.data.map((e) => e.id).indexOf(action.payload);
            state.data.splice(idx, 1);
            console.log(state.data);
            return {
                data: state.data
            }
        default:
            return state;
    }
}
export default globalReducer;