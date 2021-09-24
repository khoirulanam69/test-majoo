import ActionType from "../../config/redux/globalReducer/actionType";

const editData = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.EDIT_DATA,
            payload: data
        });
    }
}
export default editData;