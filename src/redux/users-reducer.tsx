import {ActionType} from "./state";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

type UserType = {
    id: number | string
    photos: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country:string},

}
type UsersStateType = {
    users: UserType[]
}

let initialState :UsersStateType = {
    users: [
        {id: 1, photos:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: false, fullName: "Dmitry", status: "lol", location: {city: "Minsk", country:"Belarus"},},
        {id: 2, photos:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: true, fullName: "Alex", status: "lol1", location: {city: "Moskow", country:"Russia"},},
        {id: 3, photos:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: false, fullName: "ant", status: "lol2", location: {city: "Minsk", country:"Belarus"},},
    ]
};

const usersReducer = (state: UsersStateType = initialState, action: any): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map((u:UserType) => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u:UserType) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case  SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state;
    }
};

export const followAC = (userId:string):any => ({type: FOLLOW, userId});
export const unfollowAC = (userId:string):any => ({type: UNFOLLOW, userId});
export const setUsersAC = (users:any):any => ({type: SET_USERS, users});

export default usersReducer;