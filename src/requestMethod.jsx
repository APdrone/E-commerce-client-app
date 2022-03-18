import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/v1";
const BASE_URL = " https://ecommerce-sizzle-backend-app.herokuapp.com/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTliYjk0MDFlZTlkMjgyYzE4ZDkzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjMwNDA0MiwiZXhwIjoxNjQ2NTYzMjQyfQ.dK52evfd13o6l_fApUc4psOQrxrGOlzThl93sfAu8ng";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `bearer ${TOKEN}`,
  },
});
