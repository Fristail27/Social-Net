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
    },
    follow (userId:number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow (userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId:number) {
        console.log("absolet method. please profileApi object")
        return instance.get(`/profile/${userId}`)
    }
}

export const profileAPI = {
    getProfile (userId:number) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus (userId:number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status:any) {
        return instance.put(`profile/status`, { status: status })
    },
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email:string, password: string) {
        return instance.post('auth/login', {email , password} )
    }
}
