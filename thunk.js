export default function (dispatch) {
    return function (action) {
        if (typeof action == 'function') {
            return action(dispatch)
        }
        dispatch(action)
    }
}