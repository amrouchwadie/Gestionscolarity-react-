import axios from 'axios'

export const login = user => {
    return axios
        .post(
            'http://localhost:8000/api/login',
            {
                email: user.email,
                password: user.password,
                type:user.type               
            },
            
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(res => {
            localStorage.setItem("user", 'Bearer '+res.data.token);
            return res.data.token;

        })
        .catch(err => {
            console.log(err)
        })
}


