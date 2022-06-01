import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

let fpJs;
const fpPromise = FingerprintJS.load({
    apiKey: 'tc1PlQCmQfk2W9xC0bEz', region: 'eu'
})
fpPromise
    .then(fp => fp.get())
    .then(result => {fpJs = result.visitorId})

export default class ApiData {

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

    static async postLogout(accessToken){
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/api/auth/logout', {fingerprint: fpJs},{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postRefresh(refreshToken) {
        const fpPromise = await FingerprintJS.load({
            apiKey: 'tc1PlQCmQfk2W9xC0bEz', region: 'eu'
        })
        const result = await fpPromise.get()
        const AuthStr = 'Bearer ' + refreshToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/api/auth/refresh?f='+result.visitorId, undefined,{'headers': {'Authorization': AuthStr}})
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

    static async patchUserName (accessToken, name){
        const AuthStr = 'Bearer ' + accessToken;
        const response = axios.patch('https://artartwebapp.herokuapp.com/api/user/me',{name},{'headers': {'Authorization': AuthStr}}).then(result => result).catch(err => err.response)
        return response;
    }

    static async patchUserPic (accessToken, formData) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = axios.patch('https://artartwebapp.herokuapp.com/api/user/me/updateUserpic',formData,{'headers': {'Authorization': AuthStr,'Content-type': 'multipart/form-data; boundary=formData'}}).then(result => result).catch(err => err.response)
        return response;
    }

    static async deleteUserPic (accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = axios.patch('https://artartwebapp.herokuapp.com/api/user/me/deleteUserpic',undefined,{'headers': {'Authorization': AuthStr}}).then(result => result).catch(err => err.response)
        return response;
    }

    static async sendUpdateEmailLink (accessToken, email){
        const AuthStr = 'Bearer ' + accessToken;
        const response = axios.patch('https://artartwebapp.herokuapp.com/api/user/me/updateEmail',{email},{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async updateEmail (accessToken, updateToken){
        const AuthStr = 'Bearer ' + accessToken;
        const response = axios.patch('https://artartwebapp.herokuapp.com/api/user/me/updateEmail/'+ updateToken,undefined,{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async getLikedArtist(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://artartwebapp.herokuapp.com/api/person/favorite',{'headers': {'Authorization': AuthStr}})
        return response;
    }
}
