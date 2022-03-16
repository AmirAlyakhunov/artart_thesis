import axios from "axios";

export default class PostGetData {

    static async getById(id, accessToken = null) {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get('https://artartwebapp.herokuapp.com/person/'+id, {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/person/'+id)
            return response;
        }
    }

    static async getPersons(accessToken = null) {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get('https://artartwebapp.herokuapp.com/person', {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/person')
            return response;
        }
    }

    static async getAllPersons(accessToken = null, order = 'ASC', orderBy='alphabet') {
        if(accessToken)
        {
            const AuthStr = 'Bearer ' + accessToken;
            const response = await axios.get(`https://artartwebapp.herokuapp.com/person?take=0&order=${order}&orderBy=${orderBy}`, {'headers': {'Authorization': AuthStr}})
            return response;
        }
        else {
            const response = await axios.get('https://artartwebapp.herokuapp.com/person?take=0')
            return response;
        }
    }

    static async getWorkById(id) {
        const response = await axios.get('https://artartwebapp.herokuapp.com/art?personid='+id)
        return response;
    }

    static async getEventById(id) {
        const response = await axios.get('https://artartwebapp.herokuapp.com/event/'+id)
        return response;
    }

    static async getUser(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://artartwebapp.herokuapp.com/user/me',{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postRefresh(refreshToken) {
        const AuthStr = 'Bearer ' + refreshToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/auth/refresh', undefined,{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postLike(accessToken, id) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.post('https://artartwebapp.herokuapp.com/person/like?personid='+id, undefined,{'headers': {'Authorization': AuthStr}})
        return response;
    }

    static async postConfirmEmail(confirmToken) {
        const response = await axios.post('https://artartwebapp.herokuapp.com/email/confirm?token='+ confirmToken)
        return response;
    }

    static async getLikedArtist(accessToken) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('https://artartwebapp.herokuapp.com/person/favorite',{'headers': {'Authorization': AuthStr}})
        return response;
    }
}
