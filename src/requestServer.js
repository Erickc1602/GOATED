import axios from 'axios'

const BASE_URL = "https://goated.herokuapp.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDU4NDdjNWEwNzk4OTM0Y2M5M2ZjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTIzNzU4OSwiZXhwIjoxNjc1NDk2Nzg5fQ.AU8F_cA81C8MbRLsDaIvn_JSdcc7rMujH3Ax-l-d4IY"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})