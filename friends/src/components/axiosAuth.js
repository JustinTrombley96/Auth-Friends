import axios from 'axios'
import { prependOnceListener } from 'cluster';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken')

const login = () => {
    axios.post('endpoint/here', userCredentials)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        props.history.push('/dashboard')
    })
}

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}