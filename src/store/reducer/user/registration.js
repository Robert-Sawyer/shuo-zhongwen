import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from "../../../constants/userContants";

const signupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {registering: true}
        case SIGNUP_SUCCESS:
            return {}
        case SIGNUP_FAILURE:
            return {}
        default:
            return state
    }
}

export default signupReducer
