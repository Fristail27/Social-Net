import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
    withCredentials:true,
    baseURL:baseURL,
    headers: {
        "API-KEY":"29b8c3f6-3989-47ac-8b51-b97568488b2d"
    }
})

export const usersAPI = {
    getUsers (currentPage:number = 1, pageSize:number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            })
    }
}

export const getUsers = (currentPage:number = 1, pageSize:number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=> {
            return response.data
        })
}

export const getUsers2 = (currentPage:number = 1, pageSize:number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=> {
            return response.data
        })
}
