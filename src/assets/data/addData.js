import ActionType from "../../config/redux/globalReducer/actionType";

const addData = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.ADD_DATA,
            payload: data
        });
    }
}
export default addData;