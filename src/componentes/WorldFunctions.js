import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myuniverselol.herokuapp.com/',
    timeout: 10000
});

export const uploadImage = image => {
    instance.defaults.timeout = 10000
    return instance
        .post('images/upload', {
            base64: image.base64,
            id_user: image.id_user
        })
        .then(res => {
            console.log("Uploud Sucess = " + image.id_user)
        })
        .catch(error => {
            console.log(error)
        })
}

export const getAllImages = user => {
    instance.defaults.timeout = 10000
    console.log("get images")
    return instance
        .post('images/findAll', {
            id_user: user.id_user
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            console.log(error)
        })
}

export const saveText = boxText => {
    instance.defaults.timeout = 10000
    console.log("TENTANDO SALVAR TEXT")
    return instance
        .post('boxText/save', {
            text: boxText.text,
            id_user: boxText.id_user
        })
        .then(res => {
            console.log('salvou')
            return res;
        })
        .catch(error => {
            console.log(error)
        })
}

export const getText = user => {
    instance.defaults.timeout = 10000
    return instance
        .post('boxText/findAll', {
            id_user: user.id_user
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            console.log(error)
        })
}
