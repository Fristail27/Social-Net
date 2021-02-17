export type UserType = {
    id: number | string
    photos: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country:string}
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
export type ProfileType = {
    aboutMe: string | null;
    contacts: ContactsType
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    photos: {small: string | null, large: string | null} | undefined
    userId: number
}