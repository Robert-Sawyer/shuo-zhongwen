import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from "../../../constants/userContants";

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {loggedIn: true, user} : {}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            }
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case LOGIN_FAILURE:
            return {}
        case LOGOUT:
            return {}
        default:
            return state

    }
}
export default authReducer
