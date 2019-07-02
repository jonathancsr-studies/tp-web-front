import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://myuniverselol.herokuapp.com/',
    timeout: 1000
});

export const skyType = (numuser) => {
    return instance
        .post('/widgetsHasAtts/findSky/', {
            id_user: numuser
        })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}