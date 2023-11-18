export interface UsersInterFace{
    success:boolean,
    message:string,
    description:string
    data:{
        token:string,
        username:string,
        firstName: string,
        name:string,
        lastName: string,
        email: string,
        phone:string,
        refreshToken:string
    }
}