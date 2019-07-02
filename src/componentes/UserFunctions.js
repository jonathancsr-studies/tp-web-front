import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myuniverselol.herokuapp.com/',
    timeout: 10000
});

export const register = newUser => {
    return instance
        .post('users/register', {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            name: newUser.name,
        })
        .then(res => {
            return newUser
        })
}

export const login = user => {
    return instance
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUserData = user => {
    return instance
        .post('users/getUser', {
            id_user: user.id_user
        })
        .then(res => {
            console.log(res)
            console.log("########################")
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}

export const updateCountUser = user => {
    return instance
        .post('users/updateCount', {
            id_user: user.id_user,
            count: user.count
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
}