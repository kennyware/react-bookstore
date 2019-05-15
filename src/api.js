import axios from 'axios';

export default { 
    user: {
        login: (email, password) => 
            axios.post('http://localhost:8080/users/authenticate', { email, password }).then(res => res.data)
    }
}