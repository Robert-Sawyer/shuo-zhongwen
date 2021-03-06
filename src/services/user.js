import {authHeader} from './authHeader'

export const userServices = {
    register,
    login,
    logout,
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                // location.reload(true)
            }
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return data
    })
}

function login(username, password) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    }
    fetch('someURL/users/login', requestOptions).then(handleResponse).then(
        user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user
        }
    )
}

function logout() {
    localStorage.removeItem('user')
}

function register(user) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch('someURL/users/register', requestOptions).then(handleResponse)
}
