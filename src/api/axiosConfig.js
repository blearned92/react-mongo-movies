import axios from 'axios';

const frontEndBase = process.env.REACT_APP_FRONTEND_URL
const backEndBase = process.env.REACT_APP_BACKEND_URL
console.log(frontEndBase)

export default axios.create({
    baseURL:backEndBase,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': frontEndBase,
    },
})