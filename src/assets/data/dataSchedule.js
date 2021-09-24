import Axios from 'axios';
import ActionType from '../../config/redux/globalReducer/actionType';
const getData = () => {
    return (dispatch) => {
        Axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list').then(res => {
            return dispatch({
                type: ActionType.ADD_DATA_FROM_URL,
                payload: res.data
            });
        })
    }
}
export default getData;