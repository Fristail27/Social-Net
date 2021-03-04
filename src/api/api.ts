import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        "API-KEY": "29b8c3f6-3989-47ac-8b51-b97568488b2d"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put('/profile/photo', formData, {headers: {'Content-type': 'multipart/form-data'}})
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptcha {
    CaptureIsRequired = 10,
}

type meResponseType = {
    data: { id: number, email: string, login: string };
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number },
    resultCode: ResultCodesEnum | ResultCodesForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<meResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
