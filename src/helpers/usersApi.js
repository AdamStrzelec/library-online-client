import { createUserApiUrl, loginUserApiUrl } from './routes';
import * as api from './api';

export const createUser = (body) => {
    api.post(createUserApiUrl(), body)
}

export const loginUser = (body) => {
    api.post(loginUserApiUrl(), body)
}

export const logUser = (body) => {
    api.apiCall(loginUserApiUrl(),'POST', body)
}