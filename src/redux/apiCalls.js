import { loginFailure, loginStart, loginSucess } from "./userRedux"
import {publicRequest} from '../requestServer'

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSucess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/register', user);
        dispatch(loginSucess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};


