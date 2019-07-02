import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myuniverselol.herokuapp.com/',
    timeout: 100000
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
        console.log("Registered")
    })
}

export const login = user => {
    return instance
    .post('users/login',{
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