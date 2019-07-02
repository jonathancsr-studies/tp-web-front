import axios from 'axios'

const instance = axios.create({
    baseURL: "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/KIDFlango?api_key=RGAPI-838e3e4e-11a3-48d6-8171-3c6830de79b4",
    timeout: 10000
  });


export const userStatus = User => {
    console.log("To aqui kraio")
    return instance
    .get('', {
    })
    .then(res => {
        console.log(res)
    })
}