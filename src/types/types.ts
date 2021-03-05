export type UserType = {
    id: any
    name: string
    status: string
    photos: {
        small: (string)
        large: (string)
    }
    followed: boolean
}
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching: boolean
    followingInProgress: number[]
}
export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string
}
export type PostType = {
    id: number,
    post: string,
    likesCount: number,
};
export type ContactsType = {
    facebook: string | null;
    github: string | null;
    instagram: string | null;
    mainLink: string | null;
    twitter: string | null;
    vk: string | null;
    website: string | null;
    youtube: string | null;
}
export type PhotoInProfileType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string | null;
    contacts: ContactsType
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    photos: PhotoInProfileType
    userId: number
}

export type ProfileAndProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (newStatus:string) => void
    isOwner:boolean
    savePhoto: (file:any)=> void
    saveProfile: (profile:any) => Promise<any>
}
