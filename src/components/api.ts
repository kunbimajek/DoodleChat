import axios from "axios";

const token = 'PwyJ8JkqBqAZ'

export default axios.create({
    baseURL: 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0',
    headers: {
        'Content-Type': 'application/json',
        'token': token
    }
});