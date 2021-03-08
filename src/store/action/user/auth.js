import * as userConstants from '../../../constants/userContants'
import {userServices} from '../../../services/user'
import {alertActions} from "../alerts";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

export const userActions = {
    register,
    login,
    logout
}
function login(username, password, from) {
    return dispatch => {
        dispatch(request({username}))

        userServices.login(username, password).then(
            user => {
                dispatch(success(user))
                history.push(from)
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }}
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }}
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }}
}

function logout() {
    userServices.logout()
    return { type: userConstants.LOGOUT }
}

function register(user) {
    return dispatch => {
        dispatch(request(user))

        userServices.register().then(
            user => {
                dispatch(success())
                history.push('/login')
                dispatch(alertActions.success('Rejestracja udana!'))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }

        )
    }
    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user }}
    function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user }}
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error }}
}
