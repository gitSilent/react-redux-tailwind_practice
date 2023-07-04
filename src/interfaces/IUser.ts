export interface IState{
    userInfo:IUserInfo
}
export interface IUserInfo{
    info:IInfo
}
export interface IInfo {
    firstName: string,
    lastName: string,
    age: string,
    country: string,
    city: string,
    img: string,
}
