import ActionType from "../../config/redux/globalReducer/actionType";

const deleteData = (id) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.DELETE_DATA,
            payload: id
        });
    }
}
export default deleteData;