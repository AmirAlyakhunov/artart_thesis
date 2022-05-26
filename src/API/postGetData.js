import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const fpPromise = FingerprintJS.load({
    apiKey: 'tc1PlQCmQfk2W9xC0bEz', region: 'eu'
})
let fpJs;
fpPromise
    .then(fp => fp.get())
    .then(result => { fpJs = result.visitorId})

export default class PostGetData {

    static async getById(id, accessToken = null) {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/'+id, {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/'+id)
            return response;
        }
    }

    static async getPersons(accessToken = null) {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get('https://artartwebapp.herokuapp.com/api/person', {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/api/person')
            return response;
        }
    }

    static async getAllPersons(accessToken = null, order = 'ASC', orderBy='alphabet') {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get(`https://artartwebapp.herokuapp.com/api/person?take=0&order=${order}&orderBy=${orderBy}`, {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/api/person?take=0')
            return response;
        }
    }

    static async getWorkById(id) {
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/art?personid='+id)
        return response;
    }

    static async getEventById(id) {
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/event/'+id)
        return response;
    }

    static async getUser(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/user/me',{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postRefresh(refreshToken) {
        const AuthStr = 'Bearer ' + refreshToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/api/auth/refresh', undefined,{'headers': {'Authorization': AuthStr}, params: {f:fpJs}})
        return response;
    }

    static async postLike(accessToken, id) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/api/person/like?personid='+id, undefined,{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postConfirmEmail(confirmToken) {
        const response = await axios.post('https://artartwebapp.herokuapp.com/api/email/confirm?token='+ confirmToken)
        return response;
    }

    static async patchResetPassword (resetToken){
        const response = await axios.patch('https://artartwebapp.herokuapp.com/api/user/password/reset/'+ resetToken)
        return response;
    }

    static async getLikedArtist(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/favorite',{'headers': {'Authorization': AuthStr}})
        return response;
    }
}
