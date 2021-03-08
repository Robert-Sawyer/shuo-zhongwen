import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../../../constants/userContants'
import {userServices} from '../../../services/user'
import {alertActions} from "../alerts";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

export const userActions = {
    register
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

    function request(user) { return { type: SIGNUP_REQUEST, user }}
    function success(user) { return { type: SIGNUP_SUCCESS, user }}
    function failure(error) { return { type: SIGNUP_FAILURE, error }}

}
